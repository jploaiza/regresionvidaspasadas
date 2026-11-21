// Genera dist/newsletter-articles.json con los artículos del portal.
// Lo consume el editor de newsletter de juanpabloloaiza.com para armar correos
// (título, extracto, imagen y enlace). Se ejecuta después de `astro build`.
import { readdirSync, readFileSync, writeFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const DIST = fileURLToPath(new URL('../dist/', import.meta.url));
const BLOG = join(DIST, 'blog');

const decode = (s = '') =>
	s
		.replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(Number(n)))
		.replace(/&#x([0-9a-f]+);/gi, (_, n) => String.fromCodePoint(parseInt(n, 16)))
		.replace(/&quot;/g, '"')
		.replace(/&apos;/g, "'")
		.replace(/&lt;/g, '<')
		.replace(/&gt;/g, '>')
		.replace(/&amp;/g, '&');

const pick = (html, re) => decode((html.match(re)?.[1] ?? '').trim());

if (!existsSync(BLOG)) {
	console.error('build-article-feed: no existe dist/blog, nada que hacer');
	process.exit(0);
}

const articles = [];
for (const slug of readdirSync(BLOG)) {
	const file = join(BLOG, slug, 'index.html');
	if (!existsSync(file)) continue;
	const html = readFileSync(file, 'utf8');

	const title = pick(html, /<meta property="og:title" content="([^"]*)"/) || pick(html, /<title>([^<]*)<\/title>/);
	const excerpt = pick(html, /<meta name="description" content="([^"]*)"/);
	const imageUrl = pick(html, /<meta property="og:image" content="([^"]*)"/);
	const date = pick(html, /"datePublished":"([^"]+)"/);
	const category = pick(html, /class="article-header-badge"[^>]*>([^<]*)</) || 'Artículo';

	if (!title) continue;
	articles.push({ id: slug, slug, title, excerpt, imageUrl, date, category, tags: [] });
}

articles.sort((a, b) => String(b.date).localeCompare(String(a.date)));
writeFileSync(join(DIST, 'newsletter-articles.json'), JSON.stringify({ generatedAt: new Date().toISOString(), articles }, null, 2));
console.log(`build-article-feed: ${articles.length} artículos → dist/newsletter-articles.json`);
