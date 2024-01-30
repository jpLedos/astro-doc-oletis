import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

const LIVE_URL = 'https://jpledos.github.io'

// https://astro.build/config
export default defineConfig({
	site: 'https://jpledos.github.io',
	base: '/astro-doc-oletis',
	integrations: [
		starlight({
			title: 'Accueil',
			social: {
				linkedin: 'https://www.linkedin.com/in/j-pierre-ledos/',
			},
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', link: '/guides/example/' },
					],
				},
				{
					label: 'commercialisation',
					autogenerate: { directory: 'commercialisation' },
				},
				{
					label: 'Digitalisation',
					autogenerate: { directory: 'digital' },
				},
			],
		}),
	],
});
