import type { CaseStudy } from '../../types/schema';
import { caseCta } from '../site';

const dir = '/assets/img/component-library';

export const componentLibrary: CaseStudy = {
  slug: 'sharedcomponent-library',
  seo: {
    title: 'Making a shared component library work for a design team | Alex Ward',
    description: 'How Alex Ward helped a team move to a design system built on shared foundations and a third-party component library.',
  },
  eyebrow: 'Past experiences',
  title: 'Making a shared component library work for a design team',
  headingStyle: 'bold',
  blocks: [
    { type: 'figure', image: { src: '/assets/img/work/component-library.svg', alt: 'Shared component library overview', width: 900, height: 450 }, aspect: '2 / 1', loading: 'eager' },
    { type: 'meta', text: 'Design systems · Product design · Component adaptation · Team enablement' },

    { type: 'paragraph', text: 'A component library already existed, but it was fragmented, had limited adoption and was difficult for developers to understand and use. I brought stakeholders together to define what a scalable front-end approach needed to support, helping shape a move towards a design system built on shared foundations and a third-party component library.' },

    { type: 'heading', level: 2, text: 'The challenge' },
    { type: 'paragraph', text: 'The existing library wasn’t providing a clear, dependable route from design decisions to front-end implementation. Components were difficult to discover and understand, and their relationship to product needs and design foundations wasn’t clear enough to support consistent use.' },
    { type: 'paragraph', text: 'We first needed to establish what a more scalable approach required across the business. After assessing those needs, the team chose a third-party component library over building and maintaining one manually, based on the cost and effort involved.' },
    { type: 'paragraph', text: 'The next challenge was making that choice work in practice: connecting design foundations to the library, selecting appropriate components for product work, and adapting them to fit the product experience.' },

    { type: 'heading', level: 2, text: 'My role' },
    { type: 'paragraph', text: 'I brought stakeholders together to help define the needs of a scalable front-end approach. Following the decision to use a third-party library, I introduced the design-system workflow and worked hands-on with the design team to map, author, test and adapt components.' },
    { type: 'paragraph', text: 'I also taught colleagues how to use and extend the components consistently.' },

    { type: 'figure', image: { src: `${dir}/workflow.svg`, alt: 'Design-system workflow', width: 900, height: 510 }, aspect: '900 / 510' },

    { type: 'heading', level: 2, text: 'My approach' },
    { type: 'heading', level: 3, text: 'Define what the system needed to support' },
    { type: 'paragraph', text: 'I worked with stakeholders across the business to establish the requirements for a scalable front-end approach. This helped inform the choice to adopt a third-party component library rather than build one from scratch.' },
    { type: 'heading', level: 3, text: 'Establish a shared workflow' },
    { type: 'paragraph', text: 'I set up a central approach for managing design-foundation updates and selecting components for product work. This gave the team a clearer route for deciding what to use and how changes should be handled.' },
    { type: 'heading', level: 3, text: 'Connect foundations and components' },
    { type: 'paragraph', text: 'I mapped the design foundations to the shared component library, helping the team align its design work with the available components.' },
    { type: 'heading', level: 3, text: 'Adapt components to the product experience' },
    { type: 'paragraph', text: 'Working with design colleagues, I co-authored and tested components, then developed ways to customise their styling while keeping them connected to the shared foundation.' },
    { type: 'heading', level: 3, text: 'Help the team use and extend the system' },
    { type: 'paragraph', text: 'I shared guidance and taught colleagues how to work with the components. The aim was to build confidence and consistency across the team, so the system could support more product work over time.' },

    { type: 'figure', image: { src: `${dir}/foundations.svg`, alt: 'Foundations mapped to shared components', width: 900, height: 510 }, aspect: '900 / 510' },

    { type: 'heading', level: 2, text: 'Outcome' },
    { type: 'paragraph', text: 'The team gained a central workflow for design-foundation updates and component selection, a way to adapt shared components to product styling, and shared knowledge for using and extending them.' },
    { type: 'paragraph', text: 'This created a more practical basis for broader and more consistent use of the system. It is currently adopted by net new products, with two products recently released that fully leverage the shared components and use MCP servers to improve adoption efficiency and speed of development. Alongside these two net new products, two of three portfolios have actively adopted the front-end components and are incorporating them into new feature releases.' },

    { type: 'heading', level: 3, text: 'What I learned' },
    { type: 'paragraph', text: 'A component library does not become a design system through the components alone. Teams also need a usable workflow, clear guidance and the confidence to apply and extend components consistently.' },
    { type: 'paragraph', text: 'Defining the need before choosing the implementation approach helped connect the system to both the business case and the everyday work of designers and developers.' },
  ],
  footer: { label: 'Making a shared component library work for a design team', cta: caseCta },
};
