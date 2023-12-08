import { z, defineCollection } from 'astro:content'

const projectsCollection = defineCollection({
	type: 'content', // v2.5.0 et plus
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			legend: z.string(),
			resume: z.string(),
			date: z.date(),
			thumbnail: image(),
			altText: z.string().optional(),
			galery: z.array(image()).optional()
		})
})

const infos = defineCollection({
	type: 'content',
	schema: ({ image }) =>
		z.object({
			thumbnail: image()
		})
})

// 3. Exporter un objet `collections` unique pour enregistrer votre ou vos collection(s)
export const collections = {
	projects: projectsCollection,
	infos
}
