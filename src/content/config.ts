import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    image: z.string(),
    imageAlt: z.string(),
    category: z.string(),
    date: z.string(),
    readTime: z.string(),
    featured: z.boolean(),
    author: z.string(),
  }),
});

export const collections = { blog };
