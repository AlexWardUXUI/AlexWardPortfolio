# UI audit

Review of the portfolio as migrated from Framer, done before componentising. Every value below was measured from the live Framer site's computed styles. Fixes marked **Done** are in this refactor. The rest are recommendations, left alone so the site still matches the original.

## 1. Inventory

| Category | Distinct values found | Notes |
|---|---|---|
| Colours | 27 (15 neutrals, 3 blues, 1 purple, 2 gradient stops, 6 alpha) | Many neutrals are near duplicates |
| Font sizes | 9 (12, 14, 16, 18, 22, 24, 32, 40, 72) | Healthy scale |
| Font weights | 6 (300 to 800) | Fine |
| Line heights | 7 ratios (1.15 to 2) | Body is 1.9, unusually loose but deliberate |
| Letter spacing | 9 (-3.8px to 1px) | -0.8 / -0.7 / -0.5 / -0.4 are visually indistinguishable |
| Spacing | 21 values | 15px, 18px, 50px, 184px sit off any scale |
| Radius | 6 (4, 10, 12, 20, 28, 32) | Fine, each has a clear role |
| Shadows | 3 (chip, hero media, none on cards) | No interactive state existed |

## 2. Findings

### Colour

1. **Two link blues.** Home uses `#0099ff`, case-study nav uses `#3899ff` (3.0:1 vs 2.9:1 contrast). **Done:** both now use `color.primary.default`. This is the only visible change from the Framer site.
2. **Near-duplicate neutrals.** `#888888` / `#8c8c8c` and `#333333` / `#313233` cannot be told apart. They are kept as separate primitives so nothing shifts, with descriptions marking them as merge candidates.
3. **Three different heading blacks.** `#000000` (card titles, H2), `#111111` (brand, connect), `#151719` (hero) and navy `#001122` (case titles). Recommend two: `text.heading` and `text.display`.

### Accessibility (WCAG 2.2 AA)

| Pair | Ratio | Needs | Result |
|---|---|---|---|
| Body `#666666` on white | 5.74 | 4.5 | Pass |
| Link `#0099ff` on white | 3.00 | 4.5 | **Fail** |
| Role tag `#b3b3b3` on white | 2.10 | 4.5 | **Fail** |
| Meta line `#8c8c8c` on white (12px) | 3.36 | 4.5 | **Fail** |
| Eyebrow `#888888` on white (24px) | 3.54 | 3.0 (large) | Pass |
| White on banner gradient | 2.59 | 3.0 (large) | **Fail** |
| White on purple pill | 5.61 | 4.5 | Pass |

Recommended one-line token fixes: `color.blue.500` to `#0077cc` (4.66:1), `color.neutral.300` and `400` to `#767676` (4.54:1), and darken the banner gradient stops. Because components only read tokens, each fix lands everywhere at once.

### Typography

4. **Two H2 styles across case studies.** Four pages use bold black 24/1.4; onboarding and Shotscope use semibold navy 24/1.5. Kept as `headingStyle: 'bold' | 'semibold'` on the CaseStudy schema. Recommend choosing one.
5. **Letter-spacing sprawl.** Nine values where five would do (-3.8, -1.5, -0.8, 0, 1).

### Spacing and layout

6. **Off-scale spacing.** Chip gap 15px (**Done:** normalised to 16px), card gap 18px, case top offset 50px, hero left padding 184px. Recommend a 4px base scale and removing 18 and 50.
7. **Hero is offset left, not centred** (184px left, 60px right). Intentional in Framer but brittle between 1280px and 1440px.

### Semantics and markup

8. **Wrong elements in Framer's markup.** Hero intro was an `<h1>`, nav brand an `<h2>`, card tags `<h2>`. **Done:** one `<h1>` per page, paragraphs for prose, lists for roles and nav.
9. **Hidden duplicate images.** Four cards stacked a hidden second image underneath the visible one. **Done:** removed (the unused file is `work/card-backdrop.png`).
10. **No hover or focus state on cards.** **Done:** shadow on hover and keyboard focus, plus a focus outline.

### Content (left untouched, for your review)

- Onboarding: a second "The Challenge" heading sits directly under "How I approached it".
- **Done:** typos and grammar slips fixed ("co-inside", "it's platforms redesigned", "a 18,000+", "organizations digital landscape", "VP’s", "was involved being", stray capitals, missing full stops). The Framer footer's "Agilent configuator" was already corrected in the migration.
- Mixed UK and US spelling (organisation / organization, specialised / specialized) and three spellings of the Shot Scope brand remain.
- AI case study, "What I learned" repeats the Agilent lessons word for word.
- One AI case study sentence is hard to parse: "This also allowed us to lead, as designers ideas that were quickly become concept first...".
