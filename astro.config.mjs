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
            { label: 'AWS Use Cases', link: '/guides/aws/' },
            { label: 'Azure Use Cases', link: '/guides/azure/' },
            { label: 'GCP Use Cases', link: '/guides/gcp/' },
          ],
        },
        {
          label: 'AWS Use Cases',
          autogenerate: { directory: 'guides/aws' },
        },
        {
          label: 'Azure Use Cases',
          autogenerate: { directory: 'guides/azure' },
        },
        {
          label: 'GCP Use Cases',
          autogenerate: { directory: 'guides/gcp' },
        },
      ],
    }),
  ],
});
