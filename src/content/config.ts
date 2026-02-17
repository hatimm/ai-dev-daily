import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    image: z.string(),
    imageAlt: z.string().optional(),
    category: z.string(),
    date: z.string(),
    readTime: z.string(),
    featured: z.boolean().default(false),
    author: z.string().default('AI Dev Daily'),
  }),
});

export const collections = { blog };
