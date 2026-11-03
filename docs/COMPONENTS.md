# Component inventory

The live, always-current version of this document is the site's own **/design-system/** page, generated at build time from the token files, `schema.ts`, `content.config.ts` and the component sources (`src/lib/design-system.ts`). This file is a summary.

Every component's props are a TypeScript interface in `src/types/schema.ts`. Components take colour, type and shadow only from **semantic** tokens; spacing and sizes come from the primitive scales.

## Atoms (8)

| Component | Props | Notes |
|---|---|---|
| Heading | `HeadingProps` | `level` (h1-h3) is separate from `style`, so the outline stays correct |
| Text | `TextProps` | any typography token and text colour |
| Image | `ImageProps` | explicit `cover` / `contain`; alt text required, `decorative` hides from screen readers |
| Backdrop | `BackdropProps` | decorative background: glows plus gutter swirls, hidden from screen readers; `area="gutters"` keeps it out of the reading column (case studies) |
| Button | `ButtonProps` | glass pill; `primary` (white 90%, brand gradient rim, edge swirls) or `secondary` (light glass, quiet ink edge, swirls on hover only); `<a>` with href, else `<button>`; leading icon, external links get a trailing icon and "opens in a new tab" for screen readers; 44px minimum target; can open a native popover |
| Icon | `IconProps` | decorative 20px line icons: menu, work, system, home, message, external |
| Chip | `ChipProps` | dark glass tag over imagery, optional icon |
| Pill | `PillProps` | secondary-colour badge |
| Code | `CodeProps` | inline monospace |

## Molecules (7)

| Component | Props | Notes |
|---|---|---|
| ChipGroup | `ChipGroupProps` | wrapping row of Chips |
| Figure | `FigureProps` | rounded media; `width` content / wide |
| Columns | `ColumnsProps` | two columns in MDX; stacks on tablet |
| CodeBlock | `CodeBlockProps` | labelled, scrollable code |
| Stat | `StatProps` | counted value, label, detail |
| ContrastBadge | `ContrastBadgeProps` | WCAG ratio, passes only at AAA (7:1) |

## Organisms (10)

| Component | Props | Notes |
|---|---|---|
| Navbar | `NavbarProps` | fixed glass bar with brand and nav Buttons; folds the buttons behind a Menu popover when they no longer fit (measured), then drops the tagline |
| Hero | `HeroProps` | headline, intro, elevated image |
| ProjectCard | `ProjectCardProps` | `tone` light / dark, optional badge, frosted glass surface (light or dark), elevation-1 at rest, elevation-2 and lift on hover / focus |
| WorkGrid | `WorkGridProps` | rows of two cards; widths from each card's `size` |
| ConnectSection | `ConnectSectionProps` | closing call to action |
| CaseHeader | `CaseHeaderProps` | eyebrow and display title |
| Gallery | `GalleryProps` | sunken panel: feature image over 2 or 3 images |
| CaseFooter | `CaseFooterProps` | label and contact prompt |
| VariantPlayground | `VariantPlaygroundProps` | CSS-only switcher for ProjectCard variants |
| SystemTeaser | `SystemTeaserProps` | home section linking to /design-system/ |

## Templates and pages

| File | Role |
|---|---|
| `layouts/BaseLayout.astro` | Document shell, meta, fonts, favicon |
| `layouts/CaseStudyLayout.astro` | Header, hero, MDX body (with prose styles), footer |
| `pages/index.astro` | Home |
| `pages/[slug].astro` | One route per MDX file in `src/content/case-studies` |
| `pages/design-system.astro` | Generated documentation; uses `components/showcase/*` (docs only, not counted) |

## Case studies

Each case study is `src/content/case-studies/<slug>.mdx`. Frontmatter is validated by the zod schema in `src/content.config.ts` (title, SEO, hero image, optional tags or period, footer label). The body is Markdown; import `Figure`, `Gallery` or `Columns` where needed.

## Tokens

Two tiers in `tokens/` (W3C DTCG format), built by `scripts/build-tokens.mjs`:

| Tier | File | Count | Purpose |
|---|---|---|---|
| Primitive | `primitive.json` | 103 | Raw values: palette (all AAA), type scale, spacing, radius, sizes, blur, breakpoints, motion |
| Semantic | `semantic.json` | 56 | Purpose names: `color.primary`, `color.text.*`, `color.surface.*` (incl. glass), eight typography styles, `shadow.elevation-0..3`, `effect.glass-blur-*`, `color.backdrop.*` |

The third, component tier was removed: on a single site most component tokens were one-to-one renames of a semantic token.

## Accessibility rule

Every text colour must reach WCAG AAA (7:1) on the darkest surface it can sit on. Glass is measured over the worst backdrop. `TARGET_RATIO` in `src/lib/color.ts` drives the pass / fail badges on the /design-system/ page, so a token change that drops below 7:1 shows up as a fail there.
