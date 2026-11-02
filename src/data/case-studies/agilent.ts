import type { CaseStudy } from '../../types/schema';
import { caseCta } from '../site';

const dir = '/assets/img/agilent';

export const agilent: CaseStudy = {
  slug: 'agilent-configurator',
  seo: {
    title: 'Agilent configurator | Alex Ward',
    description: 'Designing an interactive product configurator to help customers explore complex laboratory equipment.',
  },
  eyebrow: 'Past experiences',
  title: 'Agilent configurator',
  headingStyle: 'bold',
  blocks: [
    { type: 'figure', image: { src: `${dir}/hero.png`, alt: 'Configurator process flow', width: 1000, height: 500 }, aspect: '2 / 1', fit: 'contain', width: 'wide', loading: 'eager' },

    { type: 'heading', level: 2, text: 'Introduction' },
    { type: 'paragraph', text: "Configuring expensive, complex, and specialized scientific instruments is a lengthy and intricate process. This project examined the customer, design, business, and content needs of a configurator aimed at enhancing lead qualification within the instrument sales process. A complex instrument served as the pilot for an e-commerce tool intended for use across Agilent's instrument portfolio." },

    { type: 'heading', level: 3, text: 'Project overview' },
    {
      type: 'columns',
      columns: [
        [
          { type: 'paragraph', text: [{ strong: 'Role:' }, ' Lead UX/UI designer'] },
          { type: 'paragraph', text: [{ strong: 'Agency stakeholders:' }, ' Junior designer, Account manager and myself'] },
          { type: 'paragraph', text: [{ strong: 'Client side:' }, ' Subject matter experts, VPs (sponsors) and their internal design team'] },
          { type: 'paragraph', text: [{ strong: 'Timeline:' }, ' 3 months'] },
          { type: 'paragraph', text: [{ strong: 'Problem statement:' }, ' How can we reduce the number of steps mass spectrometry customers need to take to purchase complex instruments?'] },
        ],
        [
          { type: 'paragraph', text: [{ strong: 'Phase 1:' }, ' Completed prior to this project'] },
          {
            type: 'list',
            tone: 'strong',
            items: [
              'Thermo Fisher configurator test (competitor analysis)',
              'Sales rep conversations (Stakeholder research)',
              'Lead qualification vs Full Bill of materials',
            ],
          },
          { type: 'paragraph', text: [{ strong: 'Phase 2' }, ' (this project):'] },
          {
            type: 'list',
            tone: 'strong',
            items: ['Development of mid-fidelity design variants', 'Content consulting', 'Prototyping', 'End-user research'],
          },
        ],
      ],
    },

    { type: 'heading', level: 3, text: 'Project goals' },
    { type: 'paragraph', text: 'Building on insights from Phase 1, we identified key customer needs—primarily enabling self-service for expensive, specialized equipment that traditionally required extensive catalog knowledge. To design, develop, and effectively test a lead qualification tool, we set the following objectives:' },
    { type: 'paragraph', text: [{ strong: 'Understand user sentiment toward lead qualification configurators.' }] },
    { type: 'list', items: ['Did laboratory managers comprehend the level of detail provided?', 'Did they perceive lead qualification as valuable?'] },
    { type: 'paragraph', text: [{ strong: 'Establish a strong understanding of the client and their stakeholders.' }] },
    { type: 'list', items: ['As a new client, demonstrating value would help foster long-term collaboration.'] },
    { type: 'paragraph', text: [{ strong: "Gain specialized knowledge of Agilent's product offerings." }] },
    { type: 'list', items: ['Ensured that our designs showcased existing content effectively while identifying opportunities for improvement.'] },

    { type: 'banner', title: 'Design process' },
    { type: 'paragraph', text: 'We set out a process to follow throughout the project which was based around design thinking, whilst still allowing us to retain the timeline the project had.' },
    { type: 'figure', image: { src: `${dir}/design-process.png`, alt: 'Design process', width: 900, height: 363 }, aspect: '900 / 363', fit: 'contain' },

    { type: 'heading', level: 3, text: 'Developing Concepts and Prototypes' },
    { type: 'paragraph', text: [{ strong: 'Market Research and Inspiration' }] },
    {
      type: 'list',
      items: [
        'Analyzed existing content and its usage across the Agilent website.',
        'Engaged SMEs and content managers to determine the scope of potential content enhancements.',
        'Conducted heuristic analysis of both direct competitors (Thermo Fisher) and best-in-class configurators (e.g., Volvo, Apple, Google).',
      ],
    },
    { type: 'paragraph', text: [{ strong: 'Crafting a Realistic User Journey' }] },
    { type: 'paragraph', text: 'Mass spectrometry systems require highly specific configurations based on prior selections. My primary focus was translating SME insights into a structured journey that could be validated and refined collaboratively. This was achieved through:' },
    {
      type: 'list',
      items: [
        [{ strong: 'Workshops' }, ' to gather core information.'],
        [{ strong: 'Reviewing and refining content-driven configurator journeys.' }],
      ],
    },
    { type: 'paragraph', text: [{ strong: 'Mid-Fidelity Variants' }] },
    {
      type: 'list',
      items: [
        'Created and iterated on annotated static designs to explore content options.',
        'Maintained a minimal visual approach to emphasize content clarity.',
      ],
    },
    { type: 'figure', image: { src: `${dir}/mid-fidelity.png`, alt: 'Annotated mid-fidelity designs', width: 900, height: 538 }, aspect: '900 / 538', fit: 'contain' },

    { type: 'paragraph', text: [{ strong: 'Prototyping' }] },
    {
      type: 'list',
      items: [
        'Developed two design variants into functional prototypes.',
        'Incorporated conditional logic to simulate realistic user flows for testing.',
      ],
    },
    {
      type: 'figurePair',
      images: [
        { src: `${dir}/prototype-1.gif`, alt: 'Prototype variant one' },
        { src: `${dir}/prototype-2.gif`, alt: 'Prototype variant two' },
      ],
    },
    {
      type: 'gallery',
      feature: { src: `${dir}/gallery-1.png`, alt: 'Configurator design' },
      items: [
        { src: `${dir}/gallery-2.png`, alt: 'Configurator detail' },
        { src: `${dir}/gallery-3.png`, alt: 'Configurator detail' },
        { src: `${dir}/gallery-4.png`, alt: 'Configurator detail' },
      ],
      columns: 3,
    },

    { type: 'heading', level: 3, text: 'Research Approach' },
    { type: 'paragraph', text: [{ strong: 'Planning the Research' }] },
    {
      type: 'list',
      items: [
        'Used internal pain points to develop hypotheses and structure the research plan.',
        'Focused on a clear direction, given that only one round of testing was available within the project scope.',
        'Developed a research script with non-leading questions.',
        'Conducted user interviews with laboratory managers.',
      ],
    },
    { type: 'heading', level: 3, text: 'Presenting Research Insights' },
    { type: 'paragraph', text: [{ strong: 'Delivering Research Findings' }] },
    { type: 'paragraph', text: 'Effectively communicating research findings to senior stakeholders was crucial to maximizing impact. Since the client primarily used presentations, we aligned our reporting format accordingly.' },
    { type: 'paragraph', text: [{ strong: 'Project Impact' }] },
    { type: 'paragraph', text: 'The research findings were highly praised, with feedback stating that it was the most comprehensive research the client had ever received from an agency. While the project did not lead to the immediate release of a configurator, it paved the way for subsequent projects and further collaboration between the agency and Agilent.' },
    {
      type: 'gallery',
      feature: { src: `${dir}/research-1.png`, alt: 'Research findings presentation' },
      items: [
        { src: `${dir}/research-2.png`, alt: 'Research findings slide' },
        { src: `${dir}/research-3.png`, alt: 'Research findings slide' },
      ],
      columns: 2,
      itemFit: 'contain',
    },

    { type: 'heading', level: 3, text: 'Lessons learned' },
    {
      type: 'list',
      items: [
        'Detailed prototyping is invaluable for content research and validation.',
        'Setting clear expectations and keeping stakeholders engaged throughout the process is crucial for project success.',
      ],
    },
  ],
  footer: { label: 'Agilent configurator', cta: caseCta },
};
