import type { Brand, ButtonLink, CaseFooterProps, ConnectSectionProps, HeroProps } from '../types/schema';

export const LINKEDIN = 'https://www.linkedin.com/in/alexjward93/';

export const site = {
  title: 'Alex Ward | Product & Service design lead',
  description: 'Design leader | Lead product designer | Service design',
  ogImage: '/assets/img/home/hero.png',
};

export const brand: Brand = {
  name: 'ALEX WARD',
  tagline: 'Product & Service design lead',
  href: '/',
};

export const homeNav: ButtonLink[] = [
  { label: 'Selected work', href: '#work', icon: 'work', variant: 'primary' },
  { label: 'Design system', href: '/design-system/', icon: 'system', variant: 'secondary' },
  { label: 'Contact me', href: LINKEDIN, external: true, icon: 'message', variant: 'secondary' },
];

export const caseNav: ButtonLink[] = [
  { label: 'Home', href: '/', icon: 'home', variant: 'secondary' },
  { label: 'Design system', href: '/design-system/', icon: 'system', variant: 'secondary' },
];

export const designSystemNav: ButtonLink[] = [
  { label: 'Home', href: '/', icon: 'home', variant: 'secondary' },
  { label: 'Contact me', href: LINKEDIN, external: true, icon: 'message', variant: 'secondary' },
];

export const designSystemCopy = {
  eyebrow: 'Design system',
  title: 'How this site is built',
  intro:
    'This portfolio runs on a small design system: tokens in the W3C format, components organised by atomic level, and TypeScript schemas that every component and every case study must satisfy. Everything on this page is generated from the source files, so it cannot drift from the code.',
  seo: {
    title: 'Design system | Alex Ward',
    description: 'Tokens, components and content schemas behind Alex Ward’s portfolio, generated from the source code.',
  },
};

export const hero: HeroProps = {
  eyebrow: 'Product & service design lead · Edinburgh',
  title: 'I design products, the services around them and the systems that hold them together.',
  intro:
    'I lead design from first research to shipped product. Most recently: a design system and a growing team supporting nine products in healthcare software.',
  image: {
    src: '/assets/img/home/hero-layers.svg',
    alt: 'Three stacked layers: a service blueprint with customer, frontstage and backstage lanes at the base, a design system of shared components in the middle, and a product screen built from them on top',
    width: 1000,
    height: 1000,
  },
};

export const connect: ConnectSectionProps = {
  id: 'contact',
  title: 'Let’s connect!',
  text: 'Connect with me on LinkedIn and shoot me a message.',
  cta: { label: 'Connect on LinkedIn', href: LINKEDIN, external: true, icon: 'message' },
};

export const caseCta: Omit<CaseFooterProps, 'label'> = {
  prompt: 'Want to learn more?',
  cta: { label: "Let's connect", href: LINKEDIN, external: true, icon: 'message' },
};
