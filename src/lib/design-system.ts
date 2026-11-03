/**
 * Build-time data for the design system showcase.
 *
 * Everything here is derived from the real source files (generated tokens,
 * component .astro files, schema.ts and case study content), so the showcase
 * can never drift from the code it documents.
 */
import schemaSource from '../types/schema.ts?raw';
import contentConfigSource from '../content.config.ts?raw';
import { tokens, tokenPaths, type TokenMeta, type TokenPath, type TokenTier } from '../tokens/tokens';
import { composite, contrast, wcagLevel, type WcagLevel } from './color';

/* -------------------------------------------------------------------------- */
/* Tokens                                                                     */
/* -------------------------------------------------------------------------- */

export const allTokens: TokenMeta[] = tokenPaths.map((p) => tokens[p]);

export function tokensWhere(prefix: string, tier?: TokenTier): TokenMeta[] {
  return allTokens.filter((t) => t.path.startsWith(prefix) && (!tier || t.tier === tier));
}

export const tierCounts: Record<TokenTier, number> = {
  primitive: allTokens.filter((t) => t.tier === 'primitive').length,
  semantic: allTokens.filter((t) => t.tier === 'semantic').length,
};

/** Follows aliasOf links from a token down to its raw primitive. */
export function aliasChain(path: TokenPath): TokenMeta[] {
  const chain: TokenMeta[] = [];
  let current: TokenMeta | undefined = tokens[path];
  while (current) {
    chain.push(current);
    current = current.aliasOf ? tokens[current.aliasOf] : undefined;
  }
  return chain;
}

/** Last segment(s) of a token path for compact labels, e.g. "color.text.muted" -> "text.muted". */
export function shortName(path: string, segments = 2): string {
  return path.split('.').slice(-segments).join('.');
}

export interface ColorRow {
  token: TokenMeta;
  hex: string;
  background: string;
  backgroundName: string;
  ratio: number | null;
  level: WcagLevel | null;
}

const v = (path: TokenPath) => String(tokens[path].value);
const WHITE = v('color.surface.default');
const INVERSE = v('color.surface.inverse');
/** The darkest light surface text sits on (code blocks, panels). Light text tokens are measured here. */
const DARKEST_LIGHT = v('color.surface.sunken');

/** Every semantic text colour, measured against the darkest surface it can appear on. */
export const textColorRows: ColorRow[] = tokensWhere('color.text.', 'semantic').map((token) => {
  const hex = String(token.value);
  const inverse = token.path.includes('inverse');
  const background = inverse ? INVERSE : DARKEST_LIGHT;
  const ratio = contrast(hex, background);
  return {
    token,
    hex,
    background,
    backgroundName: inverse ? 'surface.inverse' : 'surface.sunken',
    ratio,
    level: ratio === null ? null : wcagLevel(ratio),
  };
});

/** Brand colours: the link blue as text on the darkest light surface, the purple with white text on it. */
export const brandColorRows: ColorRow[] = (['color.primary.default', 'color.secondary.default'] as const).map((path) => {
  const token = tokens[path];
  const hex = String(token.value);
  const asText = path === 'color.primary.default';
  const background = asText ? DARKEST_LIGHT : hex;
  const fg = asText ? hex : WHITE;
  const ratio = contrast(fg, background);
  return {
    token,
    hex,
    background,
    backgroundName: asText ? 'surface.sunken' : 'white text on fill',
    ratio,
    level: ratio === null ? null : wcagLevel(ratio),
  };
});

export const surfaceRows = tokensWhere('color.surface.', 'semantic');

/** Scales an rgba() token's alpha, e.g. the swirls, which fade to 10% under the content column. */
function fade(value: string, factor: number): string {
  return value.replace(/,\s*([\d.]+)\)$/, (_, a) => `, ${Number(a) * factor})`);
}

/**
 * The darkest the home page backdrop can get behind a card, ignoring the blur
 * (which only lightens it): both glows stacked at full strength plus a swirl
 * line at its in-column 10%. Cards never sit on anything darker.
 */
export const PAGE_BACKDROP_DARKEST = composite(
  fade(v('color.backdrop.swirl'), 0.1),
  composite(v('color.backdrop.glow-secondary'), composite(v('color.backdrop.glow-primary'), v('color.surface.page')))
);

/**
 * Glass: you can't measure through a blur, so each surface is measured over the
 * worst possible backdrop (black behind light glass, white behind dark glass).
 */
export const glassRows = [
  { surface: 'color.surface.glass-light', backdrop: '#000000', backdropName: 'black', text: ['color.text.primary', 'color.text.emphasis'] },
  { surface: 'color.surface.glass-dark', backdrop: '#ffffff', backdropName: 'white', text: ['color.text.inverse'] },
  { surface: 'color.surface.glass-card-light', backdrop: PAGE_BACKDROP_DARKEST, backdropName: 'darkest page backdrop', text: ['color.text.primary', 'color.text.secondary'] },
  { surface: 'color.surface.glass-card-dark', backdrop: '#ffffff', backdropName: 'white', text: ['color.text.inverse', 'color.text.inverse-secondary'] },
  // Buttons: the fill sits on the brand gradient rim, so the darker stop (primary blue) is its worst backdrop
  { surface: 'color.surface.glass-button', backdrop: v('color.primary.default'), backdropName: 'brand blue rim', text: ['color.text.primary'] },
].flatMap((g) =>
  g.text.map((t) => {
    const tint = v(g.surface as TokenPath);
    const flattened = composite(tint, g.backdrop);
    return {
      surface: g.surface,
      tint,
      text: t,
      textHex: v(t as TokenPath),
      backdropName: g.backdropName,
      flattened,
      ratio: contrast(v(t as TokenPath), flattened),
    };
  })
);

/** Every contrast fix since the Framer audit, measured with the same function as the live tables. */
export const contrastFixes = [
  { use: 'Body text', before: ['#666666', WHITE], after: [v('color.text.secondary'), DARKEST_LIGHT] },
  { use: 'Links', before: ['#0099ff', WHITE], after: [v('color.text.link'), DARKEST_LIGHT] },
  { use: 'Role tags', before: ['#b3b3b3', WHITE], after: [v('color.text.muted'), DARKEST_LIGHT] },
  { use: 'Metadata line', before: ['#8c8c8c', WHITE], after: [v('color.text.muted'), DARKEST_LIGHT] },
  { use: 'Highlighted pill', before: [WHITE, '#8941d1'], after: [WHITE, v('color.secondary.default')] },
  {
    use: 'Chips over images (worst case)',
    before: [WHITE, composite('rgba(138, 138, 138, 0.6)', WHITE)],
    after: [WHITE, composite(v('color.surface.glass-dark'), WHITE)],
  },
].map((row) => ({
  use: row.use,
  before: row.before[0] as string,
  beforeOn: row.before[1] as string,
  after: row.after[0] as string,
  afterOn: row.after[1] as string,
  beforeRatio: contrast(row.before[0] as string, row.before[1] as string),
  afterRatio: contrast(row.after[0] as string, row.after[1] as string),
}));

/* -------------------------------------------------------------------------- */
/* Components                                                                 */
/* -------------------------------------------------------------------------- */

export type Level = 'atom' | 'molecule' | 'organism';

export interface ComponentDoc {
  name: string;
  level: Level;
  file: string;
  summary: string;
  propsType: string | null;
  propsSource: string | null;
  tokens: TokenPath[];
  uses: string[];
}

const componentSources = import.meta.glob('../components/**/*.astro', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>;

const cssVarToPath = new Map(allTokens.map((t) => [t.cssVar.slice(2), t.path]));

/** Pulls `export interface Name {...}` or `export type Name = ...;` out of schema.ts. */
export function extractType(name: string): string | null {
  const start = schemaSource.search(new RegExp(`export (interface|type) ${name}\\b`));
  if (start < 0) return null;
  const rest = schemaSource.slice(start);
  if (rest.startsWith('export interface')) {
    let depth = 0;
    for (let i = 0; i < rest.length; i++) {
      if (rest[i] === '{') depth++;
      if (rest[i] === '}' && --depth === 0) return rest.slice(0, i + 1);
    }
    return null;
  }
  const end = rest.search(/;\s*\n/);
  return end < 0 ? rest : rest.slice(0, end + 1);
}

function parseComponent(file: string, source: string): ComponentDoc {
  const parts = file.split('/');
  const folder = parts[parts.length - 2] ?? '';
  const name = (parts[parts.length - 1] ?? '').replace('.astro', '');
  const level: Level = folder === 'atoms' ? 'atom' : folder === 'molecules' ? 'molecule' : 'organism';

  const doc = source.match(/\/\*\*([\s\S]*?)\*\//)?.[1] ?? '';
  const summary = doc
    .split('\n')
    .map((l) => l.replace(/^\s*\*\s?/, '').trim())
    .filter(Boolean)
    .join(' ')
    .replace(/^(Atom|Molecule|Organism):\s*\w+\.?\s*/, '');

  const propsType = source.match(/type Props = (\w+);/)?.[1] ?? null;

  const vars = [...source.matchAll(/var\(--([a-z0-9-]+)\)/g)].map((m) => m[1] ?? '');
  const typeClasses = [...source.matchAll(/type-([a-z-]+?)(?=["'`\s}])/g)].map((m) => `typography-${m[1]}`);
  const found = new Set<TokenPath>();
  for (const v of [...vars, ...typeClasses]) {
    // typography sub-properties (e.g. --typography-body-font-size) map to their parent token
    const base = v.replace(/-(font-family|font-size|font-weight|line-height|letter-spacing)$/, '');
    const path = cssVarToPath.get(v) ?? cssVarToPath.get(base);
    if (path) found.add(path);
  }

  const uses = [...source.matchAll(/import (\w+) from '\.{1,2}\/[^']+\.astro'/g)].map((m) => m[1] ?? '');

  return {
    name,
    level,
    file: file.replace('../', 'src/'),
    summary,
    propsType,
    propsSource: propsType ? extractType(propsType) : null,
    tokens: [...found].sort(),
    uses,
  };
}

const LEVEL_ORDER: Record<Level, number> = { atom: 0, molecule: 1, organism: 2 };

export const components: ComponentDoc[] = Object.entries(componentSources)
  .filter(([file]) => !file.includes('/showcase/'))
  .map(([file, source]) => parseComponent(file, source))
  .sort((a, b) => LEVEL_ORDER[a.level] - LEVEL_ORDER[b.level] || a.name.localeCompare(b.name));

export const componentCounts: Record<Level, number> = {
  atom: components.filter((c) => c.level === 'atom').length,
  molecule: components.filter((c) => c.level === 'molecule').length,
  organism: components.filter((c) => c.level === 'organism').length,
};

/* -------------------------------------------------------------------------- */
/* Content schema                                                             */
/* -------------------------------------------------------------------------- */

const mdxSources = import.meta.glob('../content/case-studies/*.mdx', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>;

export const caseStudyCount = Object.keys(mdxSources).length;

/** The zod frontmatter schema, as written in src/content.config.ts. */
export const contentSchema: string = (() => {
  const start = contentConfigSource.indexOf('const caseStudies');
  const end = contentConfigSource.indexOf('export const collections');
  return contentConfigSource.slice(start, end).trim();
})();

/** Components imported by case study MDX files, with how many files use each. */
export const mdxComponents: { name: string; files: number }[] = (() => {
  const counts = new Map<string, number>();
  for (const src of Object.values(mdxSources)) {
    for (const m of src.matchAll(/^import (\w+) from '[^']+\.astro';/gm)) {
      const name = m[1] ?? '';
      counts.set(name, (counts.get(name) ?? 0) + 1);
    }
  }
  return [...counts.entries()].map(([name, files]) => ({ name, files })).sort((a, b) => b.files - a.files);
})();

/** A short excerpt of one real case study file, frontmatter included. */
export function mdxExcerpt(file: string, lines = 32): string {
  const entry = Object.entries(mdxSources).find(([path]) => path.endsWith(`/${file}`));
  return entry ? entry[1].split('\n').slice(0, lines).join('\n') + '\n…' : '';
}
