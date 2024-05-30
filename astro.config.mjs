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
            { label: 'Start Here', link: '/guides/getting-started/' },
          ],
        },
        {
          label: 'Use Case Demos',
		  autogenerate: { directory: 'use-case-demos' }
        },
        {
          label: 'Job Type Demos',
          autogenerate: { directory: 'job-type-demos' },
        }
      ],
    }),
  ],
});
