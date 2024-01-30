import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://jpledos.github.io',
	base: '/astro-doc-oletis',
	integrations: [
		starlight({
			title: 'Accueil',
			social: {
				github: 'https://github.com/withastro/starlight',
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
