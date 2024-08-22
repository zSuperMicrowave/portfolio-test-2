import { c as createAstro, a as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead, F as Fragment, d as addAttribute } from '../../chunks/astro/server_Ttn3toyz.mjs';
import { $ as $$Paginator } from '../../chunks/Paginator_CDj2QtDE.mjs';
import { $ as $$PostPreview } from '../../chunks/PostPreview_CmEXyn9F.mjs';
import { a as groupPostsByYear, g as getAllPosts, s as sortMDByDate, b as getUniqueTags } from '../../chunks/post_SbBLdORX.mjs';
import { $ as $$Base } from '../../chunks/Base_SKkQFkS_.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://astro-cactus.chriswilliams.dev/");
const getStaticPaths = async ({ paginate }) => {
  const MAX_POSTS_PER_PAGE = 10;
  const allPosts = await getAllPosts();
  const allPostsByDate = sortMDByDate(allPosts);
  const uniqueTags = getUniqueTags(allPosts);
  return paginate(allPostsByDate, { pageSize: MAX_POSTS_PER_PAGE, props: { uniqueTags } });
};
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { page, uniqueTags } = Astro2.props;
  const meta = {
    description: "Read my collection of posts and the things that interest me",
    title: "Posts"
  };
  const paginationProps = {
    ...page.url.prev && {
      prevUrl: {
        text: `\u2190 Previous Page`,
        url: page.url.prev
      }
    },
    ...page.url.next && {
      nextUrl: {
        text: `Next Page \u2192`,
        url: page.url.next
      }
    }
  };
  const groupedByYear = groupPostsByYear(page.data);
  const descYearKeys = Object.keys(groupedByYear).sort((a, b) => +b - +a);
  return renderTemplate`${renderComponent($$result, "PageLayout", $$Base, { "meta": meta }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1 class="title mb-6">Posts</h1> <div class="grid gap-y-16 sm:grid-cols-[3fr_1fr] sm:gap-x-8"> <section aria-label="Blog post list"> ${descYearKeys.map((yearKey) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate` <h2 class="title text-lg">${yearKey}</h2> <ul class="mb-8 mt-6 space-y-8 text-start"> ${groupedByYear[yearKey]?.map((p) => renderTemplate`<li class="grid gap-2 sm:grid-cols-[auto_1fr] sm:[&_q]:col-start-2"> ${renderComponent($$result3, "PostPreview", $$PostPreview, { "post": p })} </li>`)} </ul> ` })}`)} ${renderComponent($$result2, "Pagination", $$Paginator, { ...paginationProps })} </section> ${!!uniqueTags.length && renderTemplate`<aside> <h2 class="title mb-4 flex items-center text-lg"> <svg aria-hidden="true" class="h-6 w-6" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path d="M0 0h24v24H0z" fill="none" stroke="none"></path> <path d="M7.859 6h-2.834a2.025 2.025 0 0 0 -2.025 2.025v2.834c0 .537 .213 1.052 .593 1.432l6.116 6.116a2.025 2.025 0 0 0 2.864 0l2.834 -2.834a2.025 2.025 0 0 0 0 -2.864l-6.117 -6.116a2.025 2.025 0 0 0 -1.431 -.593z"></path> <path d="M17.573 18.407l2.834 -2.834a2.025 2.025 0 0 0 0 -2.864l-7.117 -7.116"></path> <path d="M6 9h-.01"></path> </svg>
Tags
</h2> <ul class="flex flex-wrap gap-2 text-bgColor"> ${uniqueTags.map((tag) => renderTemplate`<li> <a${addAttribute(`View all posts with the tag: ${tag}`, "aria-label")} class="flex items-center justify-center rounded-lg bg-accent p-1"${addAttribute(`/tags/${tag}/`, "href")}> ${tag} </a> </li>`)} </ul> <span class="mt-4 block sm:text-end"> <a aria-label="View all blog categories" class="sm:hover:text-accent" href="/tags/">
View all →
</a> </span> </aside>`} </div> ` })}`;
}, "/home/massimiliano/Documenti/Astro/portfolio-test-2/src/pages/posts/[...page].astro", void 0);

const $$file = "/home/massimiliano/Documenti/Astro/portfolio-test-2/src/pages/posts/[...page].astro";
const $$url = "/posts/[...page]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$,
	file: $$file,
	getStaticPaths,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
