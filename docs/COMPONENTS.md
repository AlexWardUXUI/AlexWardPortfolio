# Component inventory

The live, always-current version of this document is the site's own **/design-system/** page, generated at build time from the token files, `schema.ts`, `content.config.ts` and the component sources (`src/lib/design-system.ts`). This file is a summary.

Every component's props are a TypeScript interface in `src/types/schema.ts`. Components take colour, type and shadow only from **semantic** tokens; spacing and sizes come from the primitive scales.

## Atoms (8)

| Component | Props | Notes |
|---|---|---|
| Heading | `HeadingProps` | `level` (h1-h3) is separate from `style`, so the outline stays correct |
| Text | `TextProps` | any typography token and text colour |
| Link | `LinkProps` | `inline` or `nav`; external links open in a new tab |
| Image | `ImageProps` | explicit `cover` / `contain`; alt text required, `decorative` hides from screen readers |
| Chip | `ChipProps` | translucent tag over imagery, optional icon |
| Pill | `PillProps` | secondary-colour badge |
| RichText | `RichTextProps` | renders `string`, `{ strong }`, `{ link }` nodes |
| Code | `CodeProps` | inline monospace |

## Molecules (7)

| Component | Props | Notes |
|---|---|---|
| ChipGroup | `ChipGroupProps` | wrapping row of Chips |
| RoleList | `RoleListProps` | muted role labels with dividers |
| Figure | `FigureProps` | rounded media; `width` content / wide |
| Columns | `ColumnsProps` | two columns in MDX; stacks on tablet |
| CodeBlock | `CodeBlockProps` | labelled, scrollable code |
| Stat | `StatProps` | counted value, label, detail |
| ContrastBadge | `ContrastBadgeProps` | WCAG ratio with pass / fail |

## Organisms (10)

| Component | Props | Notes |
|---|---|---|
| Navbar | `NavbarProps` | fixed bar with brand and links |
| Hero | `HeroProps` | headline, intro, elevated image |
| ProjectCard | `ProjectCardProps` | `tone` light / dark, optional badge or roles, hover shadow |
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
| Primitive | `primitive.json` | 98 | Raw values: palette, type scale, spacing, radius, sizes, breakpoints, motion |
| Semantic | `semantic.json` | 47 | Purpose names: `color.primary`, `color.text.*`, `color.surface.*`, typography styles, shadows, gradients |

The third, component tier was removed: on a single site most component tokens were one-to-one renames of a semantic token.
