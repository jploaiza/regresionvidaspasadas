// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

export default defineConfig({
	site: 'https://www.regresionvidaspasadas.com',
	trailingSlash: 'always',
	integrations: [mdx(), sitemap({ filter: (page) => !page.includes('/newsletter/') })],
});
