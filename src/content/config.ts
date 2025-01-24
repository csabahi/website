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

export const collections = {
  projects,
};