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
            { label: 'Start Here', link: '/guides/getting-started/' },
          ],
        },
        {
          label: 'Use Cases',
          items: [
            autogenerate: { directory: 'guides/aws-use-cases' },
			autogenerate: { directory: 'guides/azure-use-cases' },
			autogenerate: { directory: 'guides/gcp-use-cases' }
          ],
        }
      ],
    }),
  ],
});
