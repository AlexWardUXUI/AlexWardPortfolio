import type { CaseStudy } from '../../types/schema';
import { caseCta } from '../site';

const dir = '/assets/img/ai-assisted-design';

export const aiAssistedDesign: CaseStudy = {
  slug: 'aiassisteddesign',
  seo: {
    title: 'Giving AI-assisted design the context it needs | Alex Ward',
    description: 'How Alex Ward helped establish shared context, guidance and review practices for AI-assisted concept exploration.',
  },
  eyebrow: 'Past experiences',
  title: 'Giving AI-assisted design the context it needs',
  headingStyle: 'bold',
  blocks: [
    { type: 'figure', image: { src: `${dir}/hero.jpg`, alt: 'AI assisted design', width: 1000, height: 500 }, fit: 'contain', width: 'wide', loading: 'eager' },
    { type: 'meta', text: 'Design operations · AI enablement · Prototyping · Team leadership' },

    { type: 'heading', level: 2, text: 'Introduction' },
    { type: 'paragraph', text: 'As AI made it easier for teams to generate product concepts, exploration began happening across the organisation not just within design. I helped establish shared context and ways of working so that emerging concepts stayed connected to user needs, product direction and design standards.' },
    { type: 'paragraph', text: 'This case study is anonymised. It describes my approach at a high level and does not show company systems, product details or internal materials.' },

    { type: 'heading', level: 2, text: 'The Challenge' },
    { type: 'paragraph', text: 'A small design team was supporting a much larger product and engineering organisation. AI-generated concepts were beginning to take shape in different places, with varying levels of user, product and design context. Some work risked moving forward in disconnected directions, creating partially solved problems that designers would need to reconcile later.' },

    { type: 'heading', level: 2, text: 'My role' },
    { type: 'paragraph', text: 'I helped the design team get ahead of this shift. I worked across design, product and engineering to establish shared context, guidance and review practices that could support concept exploration across disciplines—not only within design.' },

    { type: 'figure', image: { src: `${dir}/context-structure.svg`, alt: 'How design and product knowledge was structured to inform AI-supported exploration', width: 900, height: 538 }, fit: 'contain' },

    { type: 'heading', level: 3, text: 'Making design knowledge available across teams' },
    { type: 'paragraph', text: 'I helped structure relevant design and product knowledge so it could inform AI-supported exploration. This gave designers a more consistent starting point and helped connect generated concepts to established ways of working.' },
    { type: 'heading', level: 3, text: 'Create shared guidance for concept exploration' },
    { type: 'paragraph', text: 'I coordinated contributions from designers and introduced common guidance for how contextual material should be created and maintained. This distributed ownership across the team and made the approach easier to apply consistently.' },
    { type: 'heading', level: 3, text: 'Bring design review into the process earlier' },
    { type: 'paragraph', text: 'I helped establish repeatable checks for assessing generated concepts. The intent was to make it easier to discuss whether a prototype was relevant, coherent and suitable for further exploration—not simply whether it could be generated quickly.' },
    { type: 'heading', level: 3, text: 'Help teams learn and refine the approach' },
    { type: 'paragraph', text: 'I worked with design, product and technical stakeholders to address practical barriers and explore how the approach could be used in proofs of concept. This helped move the work from individual experimentation toward a more shared capability.' },
    { type: 'paragraph', text: 'This also allowed us to lead, as designers ideas that were quickly become concept first some grounding in patterns that ensured we kept standardisation on smaller changes to products.' },

    { type: 'figure', image: { src: `${dir}/review-loop.svg`, alt: 'Review loop for assessing generated concepts', width: 900, height: 538 }, fit: 'contain' },

    { type: 'heading', level: 2, text: 'The outcome' },
    { type: 'paragraph', text: 'AI tools do not make design work more reliable on their own. Their value depends on the quality of the context around them, the way teams use them, and the judgement applied to their outputs.' },
    { type: 'paragraph', text: 'Building that capability was as much an organisational design challenge as a tooling challenge: the team needed shared ownership, practical guidance and room to test and improve the approach together.' },

    { type: 'heading', level: 2, text: 'What I learned' },
    {
      type: 'list',
      items: [
        'Detailed prototyping is invaluable for content research and validation.',
        'Setting clear expectations and keeping stakeholders engaged throughout the process is crucial for project success.',
      ],
    },
  ],
  footer: { label: 'Giving AI-assisted design the context it needs', cta: caseCta },
};
