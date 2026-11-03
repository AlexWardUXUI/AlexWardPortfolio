import type { ChipProps, ProjectCardProps, WorkGridProps } from '../types/schema';

const figma: ChipProps = { label: 'Figma', icon: { src: '/assets/img/icons/figma.png', alt: 'Figma logo', decorative: true } };
const optimalWorkshop: ChipProps = { label: 'Optimal Workshop', icon: { src: '/assets/img/icons/optimal-workshop.webp', alt: 'Optimal Workshop logo', decorative: true } };
const sketch: ChipProps = { label: 'Sketch', icon: { src: '/assets/img/icons/sketch.png', alt: 'Sketch logo', decorative: true }, iconFit: 'contain' };

export const componentLibrary: ProjectCardProps = {
  href: '/sharedcomponent-library/',
  title: 'TCG: Implementing a design system',
  description: 'I helped the team build a more consistent and scalable way to design and deliver product experiences.',
  image: { src: '/assets/img/component-library/tcg-card.svg', alt: 'Exploded view of design system layers: foundation tokens, shared components and a product screen' },
  chips: [figma, { label: 'Design maturity' }],
  size: 'narrow',
};

export const aiAssistedDesign: ProjectCardProps = {
  href: '/aiassisteddesign/',
  title: 'Giving AI agents the context they need',
  description:
    'AI tools could help companies explore ideas faster, but their outputs were often inconsistent and difficult to assess. I led work to make AI-assisted prototyping more useful.',
  image: { src: '/assets/img/work/ai-context.png', alt: 'Map of the context files given to AI tools: patterns, research, layout and business function files' },
  chips: [{ label: 'AI' }, { label: 'Leadership' }, { label: 'Frontier' }],
  tone: 'dark',
  badge: 'Highlighted work',
  size: 'wide',
};

export const onboardingBlueprint: ProjectCardProps = {
  href: '/onboarding-service-blueprint/',
  title: 'Customer onboarding service blueprint',
  description:
    'Mapping the end-to-end onboarding service to reveal customer pain points, handoff gaps and opportunities to improve delivery.',
  image: { src: '/assets/img/work/onboarding-blueprint.png', alt: 'Excerpt of the onboarding service blueprint: cross-team delivery steps beside the friction they revealed' },
  chips: [figma, { label: 'Stakeholder collaboration' }],
  roles: ['Service design'],
  size: 'wide',
};

export const designSystemBlueprint: ProjectCardProps = {
  href: '/design-system-blueprint/',
  title: 'Design system blueprint',
  description: 'Blueprinting a complex design system across multiple teams for an 18,000+ employee organisation.',
  image: { src: '/assets/img/work/design-system-blueprint.png', alt: 'Design system documentation page showing an example component with Angular, HTL and web component code' },
  chips: [figma, optimalWorkshop],
  size: 'narrow',
};

export const shotscope: ProjectCardProps = {
  href: '/Shotscope/',
  title: 'Shotscope platform redesign',
  description: 'Redesigned a mobile experience for golfers, contributing to a one-star improvement in app ratings.',
  image: { src: '/assets/img/work/shotscope.png', alt: 'Shot Scope watch faces showing hole distances, beside the mobile Strokes Gained chart' },
  chips: [sketch],
  size: 'narrow',
};

export const agilent: ProjectCardProps = {
  href: '/agilent-configurator/',
  title: 'Agilent Configurator',
  description: 'Designed an interactive product configurator to help customers explore complex laboratory equipment.',
  image: { src: '/assets/img/work/agilent-configurator.png', alt: 'Figma file of configurator layouts and annotated pattern library pages for Agilent' },
  chips: [figma, optimalWorkshop],
  roles: ['Lead designer', 'User research', 'Prototypes'],
  size: 'wide',
};

/** Home page grid. Order and pairing match the original layout. */
export const workGrid: WorkGridProps = {
  id: 'work',
  rows: [
    [componentLibrary, aiAssistedDesign],
    [onboardingBlueprint, designSystemBlueprint],
    [shotscope, agilent],
  ],
};
