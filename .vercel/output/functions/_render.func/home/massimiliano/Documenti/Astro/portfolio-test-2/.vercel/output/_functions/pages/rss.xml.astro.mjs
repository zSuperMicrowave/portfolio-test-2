import rss from '@astrojs/rss';
import { s as siteConfig } from '../chunks/site.config_CjUAzYDY.mjs';
import { g as getAllPosts } from '../chunks/post_SbBLdORX.mjs';
export { renderers } from '../renderers.mjs';

const GET = async () => {
  const posts = await getAllPosts();
  return rss({
    title: siteConfig.title,
    description: siteConfig.description,
    site: "https://astro-cactus.chriswilliams.dev/",
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.publishDate,
      link: `posts/${post.slug}`
    }))
  });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
