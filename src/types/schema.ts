/**
 * Component schemas.
 *
 * Every component's props are declared here, grouped by atomic level, so the
 * whole UI contract can be read (and later documented) in one place. Components
 * import their Props from this file; content files are typed against the same
 * interfaces, so invalid content fails `astro check` before it reaches the page.
 */

import type { CollectionEntry } from 'astro:content';

/* -------------------------------------------------------------------------- */
/* Shared primitives                                                          */
/* -------------------------------------------------------------------------- */

/** An image in /public. `src` is root-relative, e.g. "/assets/img/home/hero.png". */
export interface ImageAsset {
  src: string;
  /** Required and never empty: describe what the image shows. */
  alt: string;
  /**
   * Hide from screen readers when the image repeats adjacent text (e.g. a logo
   * beside its name). The alt stays in the data for documentation and previews.
   */
  decorative?: boolean;
  width?: number;
  height?: number;
}

export type Tone = 'light' | 'dark';

/* -------------------------------------------------------------------------- */
/* Atoms                                                                      */
/* -------------------------------------------------------------------------- */

/** Semantic typography tokens available to text atoms. Mirrors tokens/semantic.json > typography. */
export type TypeStyle =
  | 'display'
  | 'heading-md'
  | 'heading-sm'
  | 'lead'
  | 'body'
  | 'label'
  | 'caption'
  | 'code';

/** Semantic text colours. Mirrors tokens/semantic.json > color.text. */
export type TextColor =
  | 'primary'
  | 'display'
  | 'emphasis'
  | 'secondary'
  | 'muted'
  | 'inverse'
  | 'inverse-secondary'
  | 'link';

export interface HeadingProps {
  level: 1 | 2 | 3;
  /** Visual style is independent of level so document outline and appearance never fight. */
  style: Extract<TypeStyle, 'display' | 'heading-md' | 'heading-sm'>;
  color?: TextColor;
  align?: 'start' | 'center';
  class?: string;
}

export interface TextProps {
  as?: 'p' | 'span' | 'div';
  style?: TypeStyle;
  color?: TextColor;
  align?: 'start' | 'center';
  class?: string;
}

/** Icons in src/components/atoms/Icon.astro. Always decorative: the label carries the meaning. */
export type IconName = 'menu' | 'work' | 'system' | 'home' | 'message' | 'external';

export interface IconProps {
  name: IconName;
  class?: string;
}

export type ButtonVariant = 'primary' | 'secondary';

/** Glass pill button. Primary: brand gradient rim and swirls. Secondary: quiet ink edge. */
export interface ButtonProps {
  /** Visible text. Always shown, so the button never relies on an icon alone. */
  label: string;
  /** Leading icon (decorative). */
  icon?: IconName;
  /** primary: the main action (one per area). secondary: everything else. Default primary. */
  variant?: ButtonVariant;
  /** Renders a link styled as a button. Without it, a real <button>. */
  href?: string;
  /** Opens in a new tab, shows a trailing external icon and says so to screen readers. Defaults to true for http(s) links. */
  external?: boolean;
  /** id of a [popover] element this button opens and closes (native Popover API, no JS). */
  popoverTarget?: string;
  class?: string;
}

/** A labelled destination rendered as a Button: nav items and calls to action. */
export interface ButtonLink {
  label: string;
  href: string;
  icon: IconName;
  external?: boolean;
  variant?: ButtonVariant;
}

export interface ImageProps extends ImageAsset {
  fit?: 'cover' | 'contain';
  loading?: 'lazy' | 'eager';
  class?: string;
}

export interface ChipProps {
  label: string;
  icon?: ImageAsset;
  /** How the icon fills its 20px box. Sketch's logo needs "contain". */
  iconFit?: 'cover' | 'contain';
}

export interface PillProps {
  label: string;
}

export interface CodeProps {
  class?: string;
}

/* -------------------------------------------------------------------------- */
/* Molecules                                                                  */
/* -------------------------------------------------------------------------- */

export interface ChipGroupProps {
  chips: ChipProps[];
}

/** Brand shown in the Navbar. */
export interface Brand {
  name: string;
  tagline: string;
  href: string;
}

export interface FigureProps {
  image: ImageAsset;
  fit?: 'cover' | 'contain';
  /** CSS aspect-ratio, e.g. "2 / 1". Defaults to the image's own ratio. */
  aspect?: string;
  /** "wide" breaks out of the 900px column to 1000px on large screens. */
  width?: 'content' | 'wide';
  loading?: 'lazy' | 'eager';
}

export interface ColumnsProps {
  /** sm = 10px (image pairs), md = 16px (text columns). */
  gap?: 'sm' | 'md';
}

export interface CodeBlockProps {
  code: string;
  /** Shown above the code, e.g. a file path. */
  label?: string;
}

export interface StatProps {
  value: string | number;
  label: string;
  detail?: string;
}

export interface ContrastBadgeProps {
  /** WCAG contrast ratio, e.g. 4.74. Null renders nothing. */
  ratio: number | null;
}

/* -------------------------------------------------------------------------- */
/* Organisms                                                                  */
/* -------------------------------------------------------------------------- */

export interface NavbarProps {
  brand: Brand;
  links: ButtonLink[];
}

export interface HeroProps {
  title: string;
  intro: string;
  image: ImageAsset;
}

export interface ProjectCardProps {
  href: string;
  title: string;
  description: string;
  image: ImageAsset;
  chips?: ChipProps[];
  /** "dark" renders the inverse card used for highlighted work. */
  tone?: Tone;
  /** Grid footprint. narrow = 320 units, wide = 680 units at desktop. */
  size: 'narrow' | 'wide';
  /** Purple pill beside the title, e.g. "Highlighted work". */
  badge?: string;
}

export interface WorkGridProps {
  /** Rows of exactly two cards. Sizes in a row should be one narrow + one wide. */
  rows: [ProjectCardProps, ProjectCardProps][];
  id?: string;
}

export interface ConnectSectionProps {
  title: string;
  text: string;
  cta: ButtonLink;
  id?: string;
}

export interface CaseHeaderProps {
  eyebrow: string;
  title: string;
}

export interface CaseFooterProps {
  label: string;
  /** Short line before the button, e.g. "Want to learn more?" */
  prompt: string;
  cta: ButtonLink;
}

export interface GalleryProps {
  feature: ImageAsset;
  items: ImageAsset[];
  columns: 2 | 3;
  /** Fit for the row items. The feature image always covers. */
  itemFit?: 'cover' | 'contain';
}

export interface PlaygroundVariant {
  id: string;
  label: string;
  card: ProjectCardProps;
}

export interface VariantPlaygroundProps {
  /** Radio group name; must be unique on the page. */
  name: string;
  variants: PlaygroundVariant[];
}

export interface SystemTeaserProps {
  id?: string;
  eyebrow: string;
  title: string;
  intro: string;
  /** Counted facts derived from the source at build time. */
  stats: StatProps[];
  cta: ButtonLink;
  playground: VariantPlaygroundProps;
}

/* -------------------------------------------------------------------------- */
/* Case studies                                                               */
/* -------------------------------------------------------------------------- */

/**
 * Case study frontmatter. The runtime schema that enforces this lives in
 * src/content.config.ts (zod); this type is inferred from it so the two can't drift.
 */
export type CaseStudy = CollectionEntry<'caseStudies'>['data'];

/* -------------------------------------------------------------------------- */
/* Templates                                                                  */
/* -------------------------------------------------------------------------- */

export interface BaseLayoutProps {
  title: string;
  description: string;
  /** Sets the page background token. */
  surface?: 'page' | 'default';
  ogImage?: string;
  /** Extra font families to load. Inter always loads. */
  fonts?: 'mono'[];
}

/** Decorative page backdrop. Sits behind everything, hidden from assistive tech. */
export interface BackdropProps {
  /** Swirl contours in the side gutters on top of the corner glows. Default true. */
  swirls?: boolean;
  /**
   * page: glows reach across the page (home, where text on the open page is dark enough).
   * gutters: glows and swirls stay entirely outside the 900px reading column, so
   * long-form text sits on the plain page colour (case studies). Default page.
   */
  area?: 'page' | 'gutters';
}

export interface CaseStudyLayoutProps {
  study: CaseStudy;
}
