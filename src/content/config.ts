import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    tags: z.array(z.string()),
    image: z.string().optional(),
    github: z.string().url().optional(),
    demo: z.string().url().optional(),
  }),
});

const library = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    type: z.enum(['book', 'article', 'podcast', 'album', 'other']),
    author: z.string(),
    date: z.date(),
    link: z.string().url().optional(),
    tags: z.array(z.string()),
    rating: z.number().min(1).max(5).optional(),
    image: z.string().optional(),
    featured: z.boolean().default(false),
  }),
});

export const collections = {
  projects,
  library,
};