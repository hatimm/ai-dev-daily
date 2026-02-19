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
    authorRole: z.string().optional(),
    authorBio: z.string().optional(),
    tldr: z.array(z.string()).optional(),
  }),
});

const tools = defineCollection({
  schema: z.object({
    name: z.string(),
    description: z.string(),
    link: z.string().url(),
    category: z.string(),
    tags: z.array(z.string()),
    image: z.string().optional(),
    featured: z.boolean().default(false),
  }),
});

const authors = defineCollection({
  schema: z.object({
    name: z.string(),
    role: z.string(),
    bio: z.string(),
    avatar: z.string().optional(),
    twitter: z.string().optional(),
    linkedin: z.string().optional(),
  }),
});

export const collections = { blog, tools, authors };
