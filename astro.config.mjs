import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  site: 'https://minhion.github.io',
  integrations: [
    starlight({
      title: 'VSE Control-M Docs Site',
      customCss: [
        // Relative path to your @font-face CSS file.
        './src/fonts/font-face.css',
      ],
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
