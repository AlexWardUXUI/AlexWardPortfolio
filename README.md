# Alex Ward portfolio

Astro + TypeScript rebuild of the portfolio, structured as a small design system:

- **Tokens** in W3C DTCG JSON (`tokens/`), two tiers: primitive and semantic
- **Accessibility:** WCAG AAA (7:1) for all text, including over glass (see `docs/AUDIT.md`)
- **Components** organised by atomic level (`src/components/atoms|molecules|organisms`)
- **Schemas** for every component and for case study content (`src/types/schema.ts`)
- **Case studies** in MDX (`src/content/case-studies/`), frontmatter validated by `src/content.config.ts`

Ships static HTML and CSS only. No client-side JavaScript.

## Commands

```
npm install
npm run dev       # build tokens, start dev server at http://localhost:4321
npm run build     # build tokens, type-check (astro check), output to dist/
npm run preview   # serve dist/
npm run tokens    # rebuild tokens.css and tokens.ts after editing tokens/*.json
```

## Structure

```
tokens/                    primitive.json, semantic.json (source of truth)
scripts/build-tokens.mjs   generates src/styles/tokens.css and src/tokens/tokens.ts
src/
  content.config.ts        case study frontmatter schema
  content/case-studies/    one .mdx file per case study
  types/schema.ts          props for every component
  components/atoms/        Heading, Text, Button, Icon, Image, Chip, Code, Backdrop
  components/molecules/    ChipGroup, Figure, Columns, CodeBlock, Stat, ContrastBadge
  components/organisms/    Navbar, Hero, ProjectCard, WorkGrid, ConnectSection, CaseHeader, Gallery, CaseFooter, VariantPlayground, SystemTeaser
  components/showcase/     docs-only components for /design-system/
  layouts/                 BaseLayout, CaseStudyLayout
  pages/                   index.astro, [slug].astro, design-system.astro
  data/                    site.ts (nav, hero, copy), projects.ts (home cards)
  lib/                     design-system.ts (build-time docs data), color.ts (contrast)
public/assets/img/         images, grouped per page
docs/                      AUDIT.md, COMPONENTS.md
```

## Editing content

- Home cards: `src/data/projects.ts`
- A case study: edit `src/content/case-studies/<slug>.mdx`. Write Markdown; use `<Figure>`, `<Gallery>` or `<Columns>` for media and layout.
- New case study: copy an existing `.mdx`, change the frontmatter (`slug` sets the URL), and add a card in `projects.ts`.

## Deploy

`npm run build`, then deploy `dist/` to Netlify, Cloudflare Pages, Vercel or GitHub Pages (build command `npm run build`, output `dist`). URLs match the old Framer slugs.
