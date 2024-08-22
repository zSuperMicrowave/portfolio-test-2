import { a as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_Ttn3toyz.mjs';
import { $ as $$Base } from '../chunks/Base_SKkQFkS_.mjs';
import { g as getAllPosts, c as getUniqueTagsWithCount } from '../chunks/post_SbBLdORX.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const allPosts = await getAllPosts();
  const allTags = getUniqueTagsWithCount(allPosts);
  const meta = {
    description: "A list of all the topics I've written about in my posts",
    title: "All Tags"
  };
  return renderTemplate`${renderComponent($$result, "PageLayout", $$Base, { "meta": meta }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1 class="title mb-6">Tags</h1> <ul class="space-y-4"> ${allTags.map(([tag, val]) => renderTemplate`<li class="flex items-center gap-x-2"> <a class="cactus-link inline-block" data-astro-prefetch${addAttribute(`/tags/${tag}/`, "href")}${addAttribute(`View posts with the tag: ${tag}`, "title")}>
&#35;${tag} </a> <span class="inline-block">
- ${val} Post${val > 1 && "s"} </span> </li>`)} </ul> ` })}`;
}, "/home/massimiliano/Documenti/Astro/portfolio-test-2/src/pages/tags/index.astro", void 0);

const $$file = "/home/massimiliano/Documenti/Astro/portfolio-test-2/src/pages/tags/index.astro";
const $$url = "/tags";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
