import { defineConfig } from 'tinacms'

// Your hosting provider likely exposes this as an environment variable
const branch =
	process.env.GITHUB_BRANCH || process.env.VERCEL_GIT_COMMIT_REF || process.env.HEAD || 'main'

export default defineConfig({
	branch,

	// Get this from tina.io
	clientId: process.env.TINA_CLIENT_ID,
	// Get this from tina.io
	token: process.env.TINA_TOKEN,

	build: {
		outputFolder: 'admin',
		publicFolder: 'public'
	},
	media: {
		tina: {
			mediaRoot: '/src/content/assets',
			publicFolder: ''
		}
	},
	// See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
	schema: {
		collections: [
			{
				name: 'infos',
				label: 'Infos',
				path: 'src/content/infos',
				ui: {
					allowedActions: {
						create: false,
						delete: false
					}
				},
				fields: [
					{
						name: 'thumbnail',
						label: 'Image',
						type: 'image',
						required: true
					},
					{
						type: 'rich-text',
						isBody: true,
						name: 'content'
					}
				]
			},
			{
				name: 'actus',
				label: 'Actus',
				path: 'src/content/actus',
				ui: {
					allowedActions: {
						create: false,
						delete: false
					}
				},
				fields: [
					{
						name: 'thumbnail',
						label: 'Image',
						type: 'image',
						required: true
					},
					{
						name: 'enabled',
						label: 'Actif',
						type: 'boolean',
						required: true
					},
					{
						name: 'legend',
						label: 'Légend',
						type: 'string',
						required: true
					},
					{
						type: 'rich-text',
						isBody: true,
						name: 'content'
					}
				]
			},
			{
				name: 'projects',
				label: 'Projets',
				path: 'src/content/projects',
				fields: [
					{
						type: 'string',
						name: 'title',
						label: 'Title',
						isTitle: true,
						required: true
					},
					{
						type: 'string',
						name: 'legend',
						label: 'Légende',
						required: true
					},
					{
						type: 'string',
						name: 'resume',
						label: 'Résumé',
						required: true
					},
					{
						type: 'image',
						name: 'thumbnail',
						label: 'Image principale',
						required: true
					},
					{
						type: 'string',
						name: 'altText',
						label: 'Texte alternatif',
						required: false
					},
					{
						type: 'image',
						name: 'galery',
						label: 'Gallerie',
						list: true
					},
					{
						type: 'datetime',
						name: 'date',
						label: 'Date',
						required: true
					},
					{
						type: 'rich-text',
						name: 'body',
						label: 'Body',
						isBody: true
					}
				]
			}
		]
	}
})
