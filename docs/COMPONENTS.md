# Component inventory

Atomic design levels. Every component's props are a TypeScript interface in `src/types/schema.ts`; components import them as `type Props = ...Props`, so `astro check` rejects any invalid usage or content.

Components read **only** semantic or component tokens (never primitives). Changing a value in `tokens/*.json` and running `npm run tokens` updates every component.

## Atoms

| Component | Props interface | Variants / key props | Tokens used |
|---|---|---|---|
| Heading | `HeadingProps` | `level` 1-3 (semantics) separate from `style` (6 typography tokens), `color`, `align` | `typography.*`, `color.text.*` |
| Text | `TextProps` | `as` p/span/div, `style` (any of 15 typography tokens), `color` | `typography.*`, `color.text.*` |
| Link | `LinkProps` | `variant` inline / nav; external links open in a new tab | `color.text.link`, `nav.link` |
| Image | `ImageProps` | `fit` cover / contain, `loading` | none |
| Chip | `ChipProps` | optional `icon`, `iconFit` | `chip.*` |
| Pill | `PillProps` | `label` | `pill.*` |
| RoleTag | `RoleTagProps` | `label` | `role.text` |
| RichText | `RichTextProps` | renders `string`, `{ strong }`, `{ link }` nodes | via Link |

## Molecules

| Component | Props interface | Composition |
|---|---|---|
| ChipGroup | `ChipGroupProps` | Chip[] |
| RoleList | `RoleListProps` | RoleTag[] with `role.divider` |
| CardMedia | `CardMediaProps` | Image + ChipGroup, `card.media-*` |
| Brand | `BrandProps` | name + tagline (tagline hides under 600px) |
| Figure | `FigureProps` | Image in a rounded frame; `width` content / wide, `aspect`, `fit` |
| FigurePair | `{ images: [ImageAsset, ImageAsset] }` | Figure x 2 |
| List | `ListProps` | RichText items; `tone` default / strong |
| Banner | `BannerProps` | Heading on `gradient.accent` |
| MetaRow | `MetaRowProps` | two Text labels, opposite edges |

## Organisms

| Component | Props interface | Composition |
|---|---|---|
| Navbar | `NavbarProps` | Brand + Link[] |
| Hero | `HeroProps` | Heading + Text + Image |
| ProjectCard | `ProjectCardProps` | CardMedia + Heading + Pill or RoleList + Text; `tone` light / dark, `size` narrow / wide; hover + focus shadow |
| WorkGrid | `WorkGridProps` | rows of 2 ProjectCards; columns derived from card `size` |
| ConnectSection | `ConnectSectionProps` | Heading + Text with RichText |
| CaseHeader | `CaseHeaderProps` | Text (eyebrow) + Heading (display) |
| BlockRenderer | `BlockRendererProps` | maps the `Block` union to components; exhaustive at compile time |
| Gallery | `GalleryProps` | sunken panel, feature Figure + 2 or 3 column row |
| CaseFooter | `CaseFooterProps` | two label Texts |

## Templates and pages

| File | Role |
|---|---|
| `layouts/BaseLayout.astro` | Document shell, meta, fonts, `surface` |
| `layouts/CaseStudyLayout.astro` | Navbar + CaseHeader + BlockRenderer + CaseFooter |
| `pages/index.astro` | Home: Navbar, Hero, WorkGrid, ConnectSection |
| `pages/[slug].astro` | One route per `CaseStudy` in `src/data/case-studies` |

## Case study block schema

`CaseStudy.blocks` is a `Block[]`, a discriminated union on `type`:

`heading` · `paragraph` · `list` · `figure` · `figurePair` · `gallery` · `banner` · `meta` · `metaRow` · `columns` (nests `Block[]`)

To add a block: extend `Block` in `schema.ts`, then add a `case` in `BlockRenderer.astro`. The `assertNever` default makes the build fail until you do.

## Tokens

Three tiers in `tokens/` (W3C DTCG format), built by `scripts/build-tokens.mjs`:

| Tier | File | Count | Purpose |
|---|---|---|---|
| Primitive | `primitive.json` | 106 | Raw values (palette, type scale, spacing, radius, sizes, breakpoints, motion) |
| Semantic | `semantic.json` | 50 | Purpose names: `color.primary`, `color.secondary`, `color.text.*`, `color.surface.*`, typography styles, shadows, gradients |
| Component | `component.json` | 38 | Per-component decisions: `card.*`, `chip.*`, `pill.*`, `nav.*`, `panel.*` |

Outputs:

- `src/styles/tokens.css`: CSS custom properties. Aliases stay as `var()` chains, so the tiers are visible in DevTools. Plus one `.type-*` class per typography token.
- `src/tokens/tokens.ts`: `TokenPath` union, `token()` helper (typed to semantic and component tokens only), full metadata for every token (tier, type, alias, resolved value, description). This file is the data source for a future design-system section on the site.
