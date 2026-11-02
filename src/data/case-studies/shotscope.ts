import type { CaseStudy } from '../../types/schema';
import { caseCta } from '../site';

const dir = '/assets/img/shotscope';

export const shotscope: CaseStudy = {
  slug: 'Shotscope',
  seo: {
    title: 'Shotscope platform redesign | Alex Ward',
    description: "Redesigning Shot Scope's dashboard, watch interface and mobile app for golfers of all levels.",
  },
  eyebrow: 'Past experiences',
  title: 'Shotscope platform redesign',
  headingStyle: 'semibold',
  blocks: [
    { type: 'figure', image: { src: `${dir}/hero.png`, alt: 'Shot Scope watch and mobile app', width: 900, height: 450 }, aspect: '2 / 1', loading: 'eager' },
    { type: 'metaRow', start: 'Shotscope', end: 'Position held: Jun 2019 - May 2021' },

    { type: 'heading', level: 2, text: 'The challenge' },
    { type: 'paragraph', text: 'The golf tracking wearables market is booming, with the Golf GPS Devices sector valued at $4.3 billion in 2023 and projected to reach $6.8 billion by 2030. Yet, despite this rapid growth, many golfers still struggle with clunky interfaces, overwhelming data, and disjointed user experiences. ShotScope, a leader in performance tracking, provides incredible insights—but how easily can players translate them into real improvements on the course? This redesign aimed to bridge that gap, refining ShotScope’s dashboard, watch interface, and mobile application to create a more intuitive, seamless, and game-changing experience for golfers of all levels.' },

    { type: 'heading', level: 2, text: 'Project Overview' },
    {
      type: 'columns',
      columns: [
        [
          { type: 'paragraph', text: [{ strong: 'Role:' }, ' UX/UI designer'] },
          { type: 'paragraph', text: [{ strong: 'Stakeholders:' }, ' Me (UX/UI designer), Product Owner, Dev team'] },
          { type: 'paragraph', text: [{ strong: 'Timeline:' }, ' 12 months (To coincide with the new watch release)'] },
          { type: 'paragraph', text: [{ strong: 'Problem statement:' }, ' How can we drastically improve our interface design across our software offerings to further compete with the larger players in the field.'] },
        ],
        [
          { type: 'paragraph', text: [{ strong: 'Project timeline' }] },
          {
            type: 'list',
            tone: 'strong',
            items: [
              'V3 watch interface designs',
              'Onboarding redesign into mobile applications',
              'Current dashboard redesign',
              'Dashboard extensions (Strokes gained / Coach)',
              'Round sign off and overview',
            ],
          },
        ],
      ],
    },

    { type: 'heading', level: 2, text: 'My role' },
    { type: 'paragraph', text: "Being a startup and having limited resource my role involved being the design 'voice' within the company. This involved establishing a process to iterate, work with any stakeholder that had customer feedback and leverage data we have already gathered, managing stakeholder opinion and creating designs that could be implemented by the limited size development team." },
    { type: 'paragraph', text: 'Through strategic planning with the cross-functional team, we embedded lean UX practices to iterate and deliver true MVPs to the customer and establish design guidelines that could be echoed in the future.' },

    { type: 'figure', image: { src: `${dir}/role.png`, alt: 'Shot Scope design work', width: 900, height: 450 }, aspect: '2 / 1' },

    { type: 'heading', level: 2, text: 'Architectural flows' },
    { type: 'paragraph', text: 'Redesigning ShotScope’s platform from the ground up required a strategic approach. One that balanced creativity with clear, phased execution. To ensure a smooth development process, I mapped out key workflows, from watch connectivity to new user journeys, laying the foundation for a seamless onboarding experience. By visualizing these flows early, I could identify potential friction points, streamline interactions, and carve out space to develop more complex design patterns that would scale across the platform. This architectural groundwork set the stage for a more intuitive and cohesive experience, both on the watch and within the app.' },

    { type: 'figure', image: { src: `${dir}/flows.jpg`, alt: 'Architectural flows', width: 900, height: 450 }, aspect: '2 / 1' },

    { type: 'heading', level: 2, text: 'Iterative designs and testing' },
    { type: 'paragraph', text: 'While developing mid-fidelity designs, we leveraged remote user testing (using non-golfers as proxy users to gain insights from a broader international audience). This approach helped us understand how first-time users, especially those unfamiliar with similar products, would navigate onboarding and initial experiences.' },
    { type: 'paragraph', text: 'Our research made one thing clear: onboarding needed to break down every step of the setup process without worrying about length. As long as instructions were simple, intuitive, and backed by easily accessible help, even our older target demographic (55+) could onboard smoothly without needing to contact support.' },
    { type: 'paragraph', text: 'While some refinements had to be cut due to deadline constraints, the final onboarding flow successfully ensured that new users could set up their watch quickly and correctly—getting them from unboxing to the course with confidence.' },
    { type: 'paragraph', text: "This also proved to the business the value of small qualitative user tests, which were then leveraged throughout the rest of the platform redesign." },

    { type: 'figure', image: { src: `${dir}/testing.png`, alt: 'Iterative designs and testing', width: 900, height: 500 }, aspect: '900 / 500', fit: 'contain' },

    { type: 'heading', level: 2, text: 'Outcome' },
    { type: 'paragraph', text: 'Previous product launches saw a surge in support tickets, with users struggling to set up their watch, navigate the data, and make full use of the platform. This time, things were different. Support requests dropped significantly, improving response times and boosting user sentiment right from the first touchpoints in the app.' },
    { type: 'paragraph', text: 'Beyond launch, the redesigned dashboard, clearer statistics, and more intuitive visuals led to increased engagement, with more users actively exploring their data for longer. App ratings climbed by roughly one star, reflecting a better overall experience.' },
    { type: 'paragraph', text: 'The V3 watch also played a key role in helping ShotScope break further into the U.S. market, expanding its market share and setting the stage for future growth. Meanwhile, desktop dashboard user interviews reinforced the success of these changes, with overwhelmingly positive feedback on the new experience.' },

    { type: 'figure', image: { src: `${dir}/outcome.png`, alt: 'Redesigned dashboard', width: 900, height: 400 }, aspect: '900 / 400', fit: 'contain' },
  ],
  footer: { label: 'Shotscope platform redesign', cta: caseCta },
};
