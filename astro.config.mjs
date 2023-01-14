import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import svelte from '@astrojs/svelte';
import sitemap from '@astrojs/sitemap';
import prefetch from '@astrojs/prefetch';
//import node from '@astrojs/node';
import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
	site:'https://africa-conservancy.org/',
	integrations:[
		tailwind(),
		svelte(),
		sitemap({
			customPages:[
				'https://africa-conservancy.org/',
				'https://africa-conservancy.org/about-us',
				'https://africa-conservancy.org/our-mission',
				'https://africa-conservancy.org/our-board',
				'https://africa-conservancy.org/projects',
				'https://africa-conservancy.org/our-partners',
				'https://africa-conservancy.org/news',
				'https://africa-conservancy.org/contacts'
			]
		}),
		prefetch()
	],
	output:"server",
	/*adapter: node({
    mode: 'standalone'
  })*/
  adapter:vercel()
});
