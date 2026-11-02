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
import { contrast, wcagLevel, type WcagLevel } from './color';

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

const WHITE = String(tokens['color.surface.default'].value);
const INVERSE = String(tokens['color.surface.inverse'].value);

/** Every semantic text colour with its contrast against the surface it is used on. */
export const textColorRows: ColorRow[] = tokensWhere('color.text.', 'semantic').map((token) => {
  const hex = String(token.value);
  const inverse = token.path.includes('inverse');
  const background = inverse ? INVERSE : WHITE;
  const ratio = contrast(hex, background);
  return {
    token,
    hex,
    background,
    backgroundName: inverse ? 'surface.inverse' : 'surface.default',
    ratio,
    level: ratio === null ? null : wcagLevel(ratio),
  };
});

/** Brand colours, with white-text contrast where the colour is used as a fill. */
export const brandColorRows: ColorRow[] = (
  ['color.primary.default', 'color.secondary.default'] as const
).map((path) => {
  const token = tokens[path];
  const hex = String(token.value);
  const asText = path === 'color.primary.default';
  const background = asText ? WHITE : hex;
  const fg = asText ? hex : WHITE;
  const ratio = contrast(fg, background);
  return {
    token,
    hex,
    background,
    backgroundName: asText ? 'surface.default' : 'white text on fill',
    ratio,
    level: ratio === null ? null : wcagLevel(ratio),
  };
});

export const surfaceRows = tokensWhere('color.surface.', 'semantic');

/** Contrast fixes made in the audit, measured with the same function as the live tables. */
export const contrastFixes = [
  { use: 'Links', before: '#0099ff', after: String(tokens['color.text.link'].value), on: WHITE },
  { use: 'Role tags', before: '#b3b3b3', after: String(tokens['color.text.muted'].value), on: WHITE },
  { use: 'Metadata line', before: '#8c8c8c', after: String(tokens['color.text.muted'].value), on: WHITE },
].map((row) => {
  const pair = (c: string) => contrast(c, row.on);
  return { ...row, beforeRatio: pair(row.before), afterRatio: pair(row.after) };
});

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
    // typography sub-properties (e.g. --typography-nav-link-font-size) map to their parent token
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
