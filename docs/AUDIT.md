# UI audit

Review of the portfolio as migrated from Framer, done before componentising. Every value below was measured from the live Framer site's computed styles. Fixes marked **Done** are applied. The live, generated version of these numbers is on the site at /design-system/#audit.

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
2. **Near-duplicate neutrals.** `#888888` / `#8c8c8c` and `#333333` / `#313233` cannot be told apart. **Done:** neutrals reduced from 15 to 10.
3. **Three different heading blacks.** `#000000` (card titles, H2), `#111111` (brand, connect), `#151719` (hero) and navy `#001122` (case titles). **Done:** two remain, `text.primary` (#111111) and `text.display` (navy).

### Accessibility (WCAG 2.2, now AAA)

| Pair | Ratio | Needs | Result |
|---|---|---|---|
| Body `#666666` on white | 5.74 | 4.5 | Pass |
| Link `#0099ff` on white | 3.00 | 4.5 | **Fail** |
| Role tag `#b3b3b3` on white | 2.10 | 4.5 | **Fail** |
| Meta line `#8c8c8c` on white (12px) | 3.36 | 4.5 | **Fail** |
| Eyebrow `#888888` on white (24px) | 3.54 | 3.0 (large) | Pass |
| White on banner gradient | 2.59 | 3.0 (large) | **Fail** |
| White on purple pill | 5.61 | 4.5 | Pass |

**Done (Redesign branch):** the site now holds every text colour to **WCAG AAA (7:1)**, measured on the darkest light surface it can sit on (`surface.sunken`, #ededed), not just white. All changes were token edits:

| Use | Framer | Now | Ratio |
|---|---|---|---|
| Body text | `#666666` (5.74) | `text.secondary` #444444 | 8.32 |
| Links, primary | `#0099ff` (3.00) | `text.link` #005187 | 7.10 |
| Role tags, metadata | `#b3b3b3` / `#8c8c8c` | `text.muted` #4e4e4e | 7.11 |
| White on purple pill | `#8941d1` (5.61) | `secondary.default` #6a2fb0 | 7.94 |
| Chips over imagery | grey 60% (worst case ~2.3) | dark glass, ink 78% | 8.77 over white |

The gradient banner (white text 2.59:1) was removed and replaced with a standard H2.

**Glass and elevation.** Light glass (white 80%) is used for the nav, variant switcher and design system page index; dark glass (ink 78%) for chips over images. Contrast is measured over the worst possible backdrop (black behind light glass, white behind dark glass), so text passes AAA whatever scrolls underneath. Link blue is never used on glass: nav links are `text.primary` with a blue underline on hover. Glass falls back to solid fills when blur is unsupported or Reduce transparency is on, and gets a system border in Windows high contrast. A four step elevation scale (`shadow.elevation-0..3`) replaces the old ad hoc shadows.

**Glass cards.** Project cards are frosted glass: light cards use `surface.glass-card-light` (white 70%), the highlighted card `surface.glass-card-dark` (ink 90%). Cards only ever sit on page surfaces, so the light card is measured over the darkest pixel the home backdrop can produce (both glows plus a swirl line, blur ignored): title 16.00:1, description 8.25:1. The dark card is measured over pure white: 13.39:1 and 11.96:1. Chips inside a card keep their own dark glass tint.

**Buttons.** Calls to action and nav items are glass pill Buttons (option 5c): white 90% fill on a blue to purple gradient rim, swirls fading in from each end, a leading icon and, for external links, a trailing external icon plus "(opens in a new tab)" for screen readers. Label text is `text.primary` at 16:1 even measured over the rim's darkest stop. Every button is at least 44px tall (AAA target size) with a 2px focus ring. A secondary variant (light glass, quiet ink edge, ink swirls on hover only, 11.76:1 over a black backdrop) is used for every action except the one main action per area: on the home bar Selected work is primary and Design system and Contact me are secondary; case study and design system bars are all secondary; inside the folded menu every action, and the Menu button itself, is secondary. The nav measures whether its buttons fit beside the brand and folds them behind a Menu popover when they don't (home page below about 900px, other pages below about 680px), then drops the tagline below about 480px. Inline links inside case study prose stay as links.

**Backdrop (home page).** Soft blue and purple corner glows plus swirl contours in the side gutters. The swirls fade to 10% under the content column, are hidden below 1100px, and the glows shrink to the top corners on mobile. Checked pixel by pixel at 1920, 1536, 1440, 1366, 1280, 1100, 768 and 390px wide: with all text hidden, the darkest backdrop pixel behind every text element still gives 7:1 or more (worst 7.01:1).

**Verified:** an in-browser scan of all 8 pages compared every text element's computed colour to its effective background (998 elements), 0 below 7:1. The TCG illustrations were recoloured to AAA as well. Text baked into older raster case study images was not changed.

**Done:** every image now has descriptive alt text (the Framer site left all card images and tool icons blank). `alt` can no longer be empty: the content schema and the Image atom both fail the build if it is. Logos that sit beside their own name are marked `decorative: true`, which keeps the alt in the data but hides the image from screen readers so the name isn't read twice.

### Typography

4. **Two H2 styles across case studies.** Four pages used bold black 24/1.4; onboarding and Shotscope used semibold navy 24/1.5. **Done:** one style (`typography.heading-md`); the `headingStyle` prop was removed from the schema.
5. **Letter-spacing sprawl.** **Done:** nine values reduced to six; seven line heights reduced to five.
6. **Too many type styles.** **Done:** fifteen typography tokens reduced to eight: `display`, `heading-md`, `heading-sm`, `lead`, `body`, `label`, `caption`, `code`. Display (40px, 32px on phones) now covers page titles, section titles, the hero headline and stat numbers (was display 72px, heading-xl 40px and heading-lg 32px). Lead absorbed lead-sm and the eyebrow, body absorbed nav-link, label absorbed label-tight and the nav brand. Responsive sizes live in one place in `global.css` instead of four component overrides. The hero is now centred in a 1120px column with a wider text block.

### Spacing and layout

6. **Off-scale spacing.** **Done:** 4px base scale with 2px half steps; 15 and 18 became 16, 50 became 48, and the hero's 184px inset moved to a named size token.
7. **Hero is offset left, not centred** (184px left, 60px right). Intentional in Framer but brittle between 1280px and 1440px. **Done:** the hero is centred in a 1120px column, sits side by side from 1100px and stacks below that (text first, image up to 560px), so the headline never squeezes into a narrow column. A flex-basis bug that left a 250px gap under the intro on phones and tablets was fixed.
7b. **Mobile nav overflowed.** Links wrapped onto two lines and the name was cut to "ALEX W…". **Done:** below 600px the links sit behind a Menu button (the first Button atom) that opens a light-glass panel using the native Popover API: Esc and tapping outside close it, the button and each link are at least 44px tall, and choosing a link closes it.

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
