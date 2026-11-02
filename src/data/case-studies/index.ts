import type { CaseStudy } from '../../types/schema';
import { aiAssistedDesign } from './ai-assisted-design';
import { componentLibrary } from './component-library';
import { onboardingBlueprint } from './onboarding-blueprint';
import { designSystemBlueprint } from './design-system-blueprint';
import { shotscope } from './shotscope';
import { agilent } from './agilent';

/** Every case study page. src/pages/[slug].astro builds one route per entry. */
export const caseStudies: CaseStudy[] = [
  aiAssistedDesign,
  componentLibrary,
  onboardingBlueprint,
  designSystemBlueprint,
  shotscope,
  agilent,
];
