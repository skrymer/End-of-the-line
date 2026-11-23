import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const posts = defineCollection({
  loader: glob({ pattern: '**/index.md', base: './src/content/posts', generateId: ({ entry }) => entry.replace(/\/index\.md$/, '') }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      date: z.coerce.date(),
      line: z.string(),
      lineCode: z.string(),
      destination: z.string(),
      cover: image(),
      coverAlt: z.string(),
      draft: z.boolean().default(false),
    }),
});

export const collections = { posts };
