/**
 * Content schema for case studies.
 *
 * Each case study is an MDX file in src/content/case-studies. Its frontmatter is
 * validated against this schema at build time: a missing title, an image without
 * alt text or an unknown option fails the build with a clear error.
 */
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const image = z.object({
  src: z.string().startsWith('/assets/'),
  alt: z.string().trim().min(1, 'Alt text is required: describe what the image shows.'),
  decorative: z.boolean().optional(),
  width: z.number().int().positive().optional(),
  height: z.number().int().positive().optional(),
});

const caseStudies = defineCollection({
  loader: glob({ pattern: '*.mdx', base: './src/content/case-studies' }),
  schema: z
    .object({
      /**
       * URL segment. The glob loader turns this into the entry id (it is not kept in
       * data), so the old Framer URLs like /Shotscope keep working.
       */
      slug: z.string().optional(),
      title: z.string(),
      eyebrow: z.string().default('Past experiences'),
      seo: z.object({ title: z.string(), description: z.string().max(160) }),
      /** Image directly under the title. */
      hero: z.object({
        image,
        fit: z.enum(['cover', 'contain']).default('cover'),
        aspect: z.string().optional(),
        width: z.enum(['content', 'wide']).default('content'),
      }),
      /** Skills line under the hero, e.g. "Service design · Systems thinking". */
      tags: z.string().optional(),
      /** Two labels under the hero, e.g. company and dates. */
      period: z.object({ start: z.string(), end: z.string() }).optional(),
      /** Left-hand label in the page footer. */
      footerLabel: z.string(),
    })
    .strict(),
});

export const collections = { caseStudies };
