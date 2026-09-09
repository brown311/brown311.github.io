import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const caseStudies = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/case-studies' }),
	schema: z.object({
		title: z.string(),
		year: z.number(),
		category: z.string(),
		tags: z.array(z.string()).default([]),
		summary: z.string(),
		ctaLabel: z.string(),
		// Path under /public, e.g. /images/case-studies/foo.png — not run through
		// Astro's image() pipeline since these live in public/ rather than src/.
		coverImage: z.string().optional(),
		order: z.number().default(0),
		// Renders the card's CTA as a disabled button — for case studies that
		// are announced but not written yet.
		comingSoon: z.boolean().default(false),
	}),
});

export const collections = { caseStudies };
