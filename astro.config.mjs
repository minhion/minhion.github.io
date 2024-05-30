import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://minhion.github.io',
	integrations: [
		starlight({
			title: 'My Docs',
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
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
				{
					label: 'Use Cases',
					items: [
						{ label: 'AWS', link: '/guides/aws/' },
						autogenerate: { directory: '/guides/aws' },
						{ label: 'Azure', link: '/guides/azure/' },
						autogenerate: { directory: '/guides/azure' },
						{ label: 'GCP', link: '/guides/gcp/' },
						autogenerate: { directory: '/guides/gcp' }
					]
				}
			],
		}),
	],
});
