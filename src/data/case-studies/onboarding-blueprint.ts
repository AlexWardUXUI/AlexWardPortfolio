import type { CaseStudy } from '../../types/schema';
import { caseCta } from '../site';

const dir = '/assets/img/onboarding';

export const onboardingBlueprint: CaseStudy = {
  slug: 'onboarding-service-blueprint',
  seo: {
    title: 'Customer onboarding service blueprint | Alex Ward',
    description: 'Making a complex onboarding service easier to see and improve through service blueprinting.',
  },
  eyebrow: 'Past experiences',
  title: 'Making a complex onboarding service easier to see and improve',
  headingStyle: 'semibold',
  blocks: [
    { type: 'figure', image: { src: `${dir}/service-overview.svg`, alt: 'Service overview: a simplified view of the journey and the perspectives considered', width: 900, height: 515 }, aspect: '900 / 515', loading: 'eager' },
    { type: 'meta', text: 'Service design · Service blueprinting · Systems thinking · Workshop facilitation' },

    { type: 'heading', level: 2, text: 'Approach' },
    { type: 'paragraph', text: 'I led a service-design initiative to map a complex customer onboarding journey across multiple internal teams. The work gave stakeholders a shared view of how the service connected, where customers and teams experienced friction, and where improvements could be explored.' },
    { type: 'paragraph', text: 'This case study is anonymised. The diagrams are illustrative and do not reproduce the original service blueprint.' },

    { type: 'heading', level: 2, text: 'The Challenge' },
    { type: 'paragraph', text: 'Customer onboarding depended on coordinated activity across several teams, systems and customer touchpoints. Each team understood its own responsibilities, but there was no shared end-to-end view of the service.' },
    { type: 'paragraph', text: 'That made it difficult to see how handoffs and dependencies affected the overall experience, where operational friction was building up, and which parts of the service offered the best opportunities for improvement.' },

    { type: 'heading', level: 2, text: 'My role' },
    { type: 'paragraph', text: 'I led the blueprinting initiative, from engaging stakeholders and facilitating workshops to mapping the current service and synthesising findings into improvement opportunities.' },
    { type: 'paragraph', text: 'I worked with colleagues across support, implementation, product and customer-facing teams. The aim was to help them examine the service together, rather than focus only on the steps within their own area.' },

    { type: 'figure', image: { src: `${dir}/friction-themes.svg`, alt: 'Friction themes: generalised examples of the types of issues the mapping helped surface', width: 900, height: 515 }, aspect: '900 / 515' },

    { type: 'heading', level: 2, text: 'How I approached it' },
    { type: 'heading', level: 2, text: 'The Challenge' },
    { type: 'paragraph', text: [{ strong: '1. Bring different perspectives together' }] },
    { type: 'paragraph', text: 'I engaged stakeholders involved in delivering and supporting onboarding to understand how the service worked in practice. Workshops and stakeholder discussions helped surface different perspectives, dependencies and points of friction.' },
    { type: 'paragraph', text: [{ strong: '2. Map the service at a useful level' }] },
    { type: 'paragraph', text: 'I created an end-to-end blueprint to make the relationships between customer activity, internal teams and service operations easier to discuss. The map helped reveal where work passed between teams and where a local issue could affect the wider journey.' },
    { type: 'paragraph', text: [{ strong: '3. Identify patterns and improvement opportunities' }] },
    { type: 'paragraph', text: 'I analysed the blueprint for pain points, gaps and dependencies, then used those findings to support discussion about possible service improvements. The focus was on making the complexity understandable and giving teams a shared basis for deciding what to explore next.' },

    { type: 'figure', image: { src: `${dir}/mapping-to-action.svg`, alt: 'From mapping to action: how stakeholder engagement and analysis informed improvement opportunities', width: 900, height: 515 }, aspect: '900 / 515' },

    { type: 'heading', level: 2, text: 'What was surfaced' },
    { type: 'paragraph', text: 'The mapping highlighted opportunities to improve visibility across team handoffs, reduce avoidable operational friction and update internal tooling. It also helped stakeholders discuss dependencies across the service, rather than treating each team’s activity in isolation.' },

    { type: 'heading', level: 2, text: 'Outcome' },
    { type: 'paragraph', text: 'The initiative improved shared understanding of the onboarding service and supported stronger cross-functional collaboration. It identified operational inefficiencies and opportunities to reduce service friction, contributing to efforts to improve customer onboarding and service outcomes.' },

    { type: 'heading', level: 2, text: 'What I learned' },
    { type: 'paragraph', text: 'A blueprint is most useful when it becomes a shared conversation tool, not simply a detailed map. Bringing the right people together helped connect customer experience with the operational work behind it and made it easier to discuss where change could have the greatest impact.' },
    { type: 'paragraph', text: [{ strong: 'Visuals' }] },
    {
      type: 'list',
      items: [
        [{ strong: 'Service overview:' }, ' a simplified view of the journey and the perspectives considered.'],
        [{ strong: 'Friction themes:' }, ' generalised examples of the types of issues the mapping helped surface.'],
        [{ strong: 'From mapping to action:' }, ' how stakeholder engagement and analysis informed improvement opportunities.'],
      ],
    },
    { type: 'paragraph', text: 'All visuals are illustrative reconstructions. They omit the original process sequence, internal terminology, systems, data types and operational rules.' },
  ],
  footer: { label: 'Service blueprint', cta: caseCta },
};
