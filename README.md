# Alex Ward portfolio

Astro + TypeScript rebuild of the portfolio, structured as a small design system:

- **Tokens** in W3C DTCG JSON (`tokens/`), three tiers: primitive, semantic, component
- **Components** organised by atomic level (`src/components/atoms|molecules|organisms`)
- **Schemas** for every component and for case study content (`src/types/schema.ts`)
- **Content** as typed data (`src/data/`), separate from presentation

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
tokens/                 primitive.json, semantic.json, component.json (source of truth)
scripts/build-tokens.mjs
src/
  styles/tokens.css     generated
  styles/global.css     reset + text colour utilities
  tokens/tokens.ts      generated, typed token metadata
  types/schema.ts       props for every component + CaseStudy/Block schema
  components/atoms/     Heading, Text, Link, Image, Chip, Pill, RoleTag, RichText
  components/molecules/ ChipGroup, RoleList, CardMedia, Brand, Figure, FigurePair, List, Banner, MetaRow
  components/organisms/ Navbar, Hero, ProjectCard, WorkGrid, ConnectSection, CaseHeader, BlockRenderer, Gallery, CaseFooter
  layouts/              BaseLayout, CaseStudyLayout
  pages/                index.astro, [slug].astro
  data/                 site.ts, projects.ts, case-studies/*.ts
public/assets/img/      images, grouped per page
docs/AUDIT.md           UI review findings and contrast checks
docs/COMPONENTS.md      component and token inventory
```

## Editing content

- Home cards: `src/data/projects.ts`
- A case study: `src/data/case-studies/<name>.ts`
- New case study: add a file, export a `CaseStudy`, add it to `src/data/case-studies/index.ts`. The route is created from its `slug`.

## Deploy

`npm run build`, then deploy `dist/` to Netlify, Cloudflare Pages, Vercel or GitHub Pages (build command `npm run build`, output `dist`). URLs match the old Framer slugs.
