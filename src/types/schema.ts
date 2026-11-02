/**
 * Component schemas.
 *
 * Every component's props are declared here, grouped by atomic level, so the
 * whole UI contract can be read (and later documented) in one place. Components
 * import their Props from this file; content files are typed against the same
 * interfaces, so invalid content fails `astro check` before it reaches the page.
 */

/* -------------------------------------------------------------------------- */
/* Shared primitives                                                          */
/* -------------------------------------------------------------------------- */

/** An image in /public. `src` is root-relative, e.g. "/assets/img/home/hero.png". */
export interface ImageAsset {
  src: string;
  /** Required. Use "" only for purely decorative images. */
  alt: string;
  width?: number;
  height?: number;
}

/** Inline content that can carry emphasis or links. */
export type InlineNode =
  | string
  | { strong: string }
  | { link: { href: string; label: string; external?: boolean } };

/** Plain text or a sequence of inline nodes. */
export type RichText = string | InlineNode[];

export type Tone = 'light' | 'dark';

/* -------------------------------------------------------------------------- */
/* Atoms                                                                      */
/* -------------------------------------------------------------------------- */

/** Semantic typography tokens available to text atoms. Mirrors tokens/semantic.json > typography. */
export type TypeStyle =
  | 'display'
  | 'heading-xl'
  | 'heading-lg'
  | 'heading-md'
  | 'heading-md-alt'
  | 'heading-sm'
  | 'eyebrow'
  | 'lead'
  | 'lead-sm'
  | 'body'
  | 'nav-link'
  | 'brand'
  | 'label'
  | 'label-tight'
  | 'caption';

/** Semantic text colours. Mirrors tokens/semantic.json > color.text. */
export type TextColor =
  | 'primary'
  | 'heading'
  | 'display'
  | 'hero'
  | 'hero-muted'
  | 'emphasis'
  | 'secondary'
  | 'list'
  | 'muted'
  | 'tertiary'
  | 'subtle'
  | 'inverse'
  | 'inverse-secondary'
  | 'link';

export interface HeadingProps {
  level: 1 | 2 | 3;
  /** Visual style is independent of level so document outline and appearance never fight. */
  style: Extract<TypeStyle, 'display' | 'heading-xl' | 'heading-lg' | 'heading-md' | 'heading-md-alt' | 'heading-sm'>;
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

export interface LinkProps {
  href: string;
  /** Opens in a new tab with rel="noopener". Defaults to true for http(s) links. */
  external?: boolean;
  variant?: 'inline' | 'nav';
  class?: string;
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

export interface RoleTagProps {
  label: string;
}

export interface RichTextProps {
  content: RichText;
}

/* -------------------------------------------------------------------------- */
/* Molecules                                                                  */
/* -------------------------------------------------------------------------- */

export interface ChipGroupProps {
  chips: ChipProps[];
}

export interface RoleListProps {
  roles: string[];
}

export interface CardMediaProps {
  image: ImageAsset;
  chips?: ChipProps[];
}

export interface BrandProps {
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

export interface ListProps {
  items: RichText[];
  tone?: 'default' | 'strong';
}

export interface BannerProps {
  title: string;
}

export interface MetaRowProps {
  start: string;
  end: string;
}

/* -------------------------------------------------------------------------- */
/* Organisms                                                                  */
/* -------------------------------------------------------------------------- */

export interface NavLinkItem {
  label: string;
  href: string;
  external?: boolean;
}

export interface NavbarProps {
  brand: BrandProps;
  links: NavLinkItem[];
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
  /** Muted role tags beside the title, e.g. ["Lead designer", "User research"]. */
  roles?: string[];
}

export interface WorkGridProps {
  /** Rows of exactly two cards. Sizes in a row should be one narrow + one wide. */
  rows: [ProjectCardProps, ProjectCardProps][];
  id?: string;
}

export interface ConnectSectionProps {
  title: string;
  text: RichText;
  id?: string;
}

export interface CaseHeaderProps {
  eyebrow: string;
  title: string;
}

export interface CaseFooterProps {
  label: string;
  cta: RichText;
}

export interface GalleryProps {
  feature: ImageAsset;
  items: ImageAsset[];
  columns: 2 | 3;
  /** Fit for the row items. The feature image always covers. */
  itemFit?: 'cover' | 'contain';
}

/* -------------------------------------------------------------------------- */
/* Content blocks: the case study schema                                      */
/* -------------------------------------------------------------------------- */

export type Block =
  | { type: 'heading'; level: 2 | 3; text: string }
  | { type: 'paragraph'; text: RichText }
  | { type: 'list'; items: RichText[]; tone?: 'default' | 'strong' }
  | ({ type: 'figure' } & FigureProps)
  | { type: 'figurePair'; images: [ImageAsset, ImageAsset] }
  | ({ type: 'gallery' } & GalleryProps)
  | { type: 'banner'; title: string }
  | { type: 'meta'; text: string }
  | ({ type: 'metaRow' } & MetaRowProps)
  | { type: 'columns'; columns: [Block[], Block[]] };

export type BlockType = Block['type'];

export interface BlockRendererProps {
  blocks: Block[];
  /** H2 treatment for the page. "bold" = heading-md, "semibold" = heading-md-alt. */
  headingStyle: 'bold' | 'semibold';
}

export interface CaseStudy {
  /** URL segment; matches the old Framer slug so existing links keep working. */
  slug: string;
  seo: { title: string; description: string };
  eyebrow: string;
  title: string;
  headingStyle: BlockRendererProps['headingStyle'];
  blocks: Block[];
  footer: CaseFooterProps;
}

/* -------------------------------------------------------------------------- */
/* Templates                                                                  */
/* -------------------------------------------------------------------------- */

export interface BaseLayoutProps {
  title: string;
  description: string;
  /** Sets the page background token. */
  surface?: 'page' | 'default';
  ogImage?: string;
}

export interface CaseStudyLayoutProps {
  study: CaseStudy;
}
