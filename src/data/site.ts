import type { BrandProps, ConnectSectionProps, HeroProps, NavLinkItem, RichText } from '../types/schema';

export const LINKEDIN = 'https://www.linkedin.com/in/alexjward93/';

export const site = {
  title: 'Alex Ward | Service and Product design leader',
  description: 'Design leader | Lead product designer | Service design',
  ogImage: '/assets/img/home/hero.png',
};

export const brand: BrandProps = {
  name: 'ALEX WARD',
  tagline: 'Service and Product design leader',
  href: '/',
};

export const homeNav: NavLinkItem[] = [
  { label: 'Selected work', href: '#work' },
  { label: 'Contact me', href: LINKEDIN, external: true },
];

export const caseNav: NavLinkItem[] = [{ label: 'Home', href: '/' }];

export const hero: HeroProps = {
  title: 'I help teams solve complex product problems and turn them into services people can use.',
  intro:
    'I’m an Edinburgh-based product designer and design leader. I work across strategy, research and delivery, shaping product direction, building capable teams and improving end-to-end experiences.',
  image: {
    src: '/assets/img/home/hero.png',
    alt: 'Product work across web, mobile and wearable interfaces',
    width: 560,
    height: 560,
  },
};

export const connect: ConnectSectionProps = {
  id: 'contact',
  title: 'Let’s connect!',
  text: ['Connect with me on ', { link: { href: LINKEDIN, label: 'LinkedIn', external: true } }, ' and shoot me a message'],
};

export const caseCta: RichText = ['Want to learn more? ', { link: { href: LINKEDIN, label: "Let's connect", external: true } }];
