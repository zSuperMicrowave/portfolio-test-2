import { c as createAstro, a as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead } from '../../../chunks/astro/server_Ttn3toyz.mjs';
import { $ as $$Paginator } from '../../../chunks/Paginator_CDj2QtDE.mjs';
import { $ as $$PostPreview } from '../../../chunks/PostPreview_CmEXyn9F.mjs';
import { g as getAllPosts, s as sortMDByDate, b as getUniqueTags } from '../../../chunks/post_SbBLdORX.mjs';
import { $ as $$Base } from '../../../chunks/Base_SKkQFkS_.mjs';
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro("https://astro-cactus.chriswilliams.dev/");
const getStaticPaths = async ({ paginate }) => {
  const allPosts = await getAllPosts();
  const allPostsByDate = sortMDByDate(allPosts);
  const uniqueTags = getUniqueTags(allPostsByDate);
  return uniqueTags.flatMap((tag) => {
    const filterPosts = allPostsByDate.filter((post) => post.data.tags.includes(tag));
    return paginate(filterPosts, {
      pageSize: 10,
      params: { tag }
    });
  });
};
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { page } = Astro2.props;
  const { tag } = Astro2.params;
  const meta = {
    description: `View all posts with the tag - ${tag}`,
    title: `Tag: ${tag}`
  };
  const paginationProps = {
    ...page.url.prev && {
      prevUrl: {
        text: `\u2190 Previous Tags`,
        url: page.url.prev
      }
    },
    ...page.url.next && {
      nextUrl: {
        text: `Next Tags \u2192`,
        url: page.url.next
      }
    }
  };
  return renderTemplate`${renderComponent($$result, "PageLayout", $$Base, { "meta": meta }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1 class="title mb-6 flex items-center"> <a class="text-accent sm:hover:underline" href="/tags/">Tags</a> <span class="me-3 ms-2">→</span> <span class="text-xl">#${tag}</span> </h1> <section aria-label="Blog post list"> <ul class="space-y-8"> ${page.data.map((p) => renderTemplate`<li class="flex flex-col flex-wrap gap-2 sm:flex-row [&_q]:basis-full"> ${renderComponent($$result2, "PostPreview", $$PostPreview, { "as": "h2", "post": p, "withDesc": true })} </li>`)} </ul> ${renderComponent($$result2, "Pagination", $$Paginator, { ...paginationProps })} </section> ` })}`;
}, "/home/massimiliano/Documenti/Astro/portfolio-test-2/src/pages/tags/[tag]/[...page].astro", void 0);

const $$file = "/home/massimiliano/Documenti/Astro/portfolio-test-2/src/pages/tags/[tag]/[...page].astro";
const $$url = "/tags/[tag]/[...page]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$,
	file: $$file,
	getStaticPaths,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
