import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title:       z.string(),
    description: z.string(),
    pubDate:     z.coerce.date(),
    author:      z.string().default('Jose Noriega'),
    subNiche:    z.enum([
      'free-clinics',
      'community-health',
      'behavioral-health',
      'addiction-treatment',
      'mental-health',
      'hospice',
      'fqhc',
      'general',
    ]).default('general'),
    isPillar:    z.boolean().default(false),
    tags:        z.array(z.string()).default([]),
    draft:       z.boolean().default(false),
  }),
});

export const collections = { blog };
