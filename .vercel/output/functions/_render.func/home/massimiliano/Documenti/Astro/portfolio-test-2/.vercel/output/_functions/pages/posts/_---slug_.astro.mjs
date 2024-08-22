import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as renderComponent, d as addAttribute, F as Fragment, e as renderSlot } from '../../chunks/astro/server_Ttn3toyz.mjs';
import { g as getAllPosts } from '../../chunks/post_SbBLdORX.mjs';
import { $ as $$Image } from '../../chunks/_astro_assets_Bp7AdsTg.mjs';
import { $ as $$FormattedDate } from '../../chunks/FormattedDate_BP5l3HC0.mjs';
import { a as getWebmentionsForUrl } from '../../chunks/webmentions_3M6DywH5.mjs';
import { $ as $$Icon } from '../../chunks/Icon_BYoJIT7Z.mjs';
import { $ as $$Base } from '../../chunks/Base_SKkQFkS_.mjs';
export { renderers } from '../../renderers.mjs';

function injectChild(items, item) {
  const lastItem = items.at(-1);
  if (!lastItem || lastItem.depth >= item.depth) {
    items.push(item);
  } else {
    injectChild(lastItem.children, item);
    return;
  }
}
function generateToc(headings, { maxHeadingLevel = 4, minHeadingLevel = 2 } = {}) {
  const bodyHeadings = headings.filter(
    ({ depth }) => depth >= minHeadingLevel && depth <= maxHeadingLevel
  );
  const toc = [];
  for (const heading of bodyHeadings) injectChild(toc, { ...heading, children: [] });
  return toc;
}

const $$Astro$7 = createAstro("https://astro-cactus.chriswilliams.dev/");
const $$Hero = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Hero;
  const {
    content: { data, render }
  } = Astro2.props;
  const { remarkPluginFrontmatter } = await render();
  const dateTimeOptions = {
    month: "long"
  };
  return renderTemplate`${data.coverImage && renderTemplate`${maybeRenderHead()}<div class="aspect-h-9 aspect-w-16 mb-6">${renderComponent($$result, "Image", $$Image, { "alt": data.coverImage.alt, "class": "object-cover", "fetchpriority": "high", "loading": "eager", "src": data.coverImage.src })}</div>`}${data.draft ? renderTemplate`<span class="text-base text-red-500">(Draft)</span>` : null}<h1 class="title"> ${data.title} </h1> <div class="mt-3 flex flex-wrap items-center gap-x-3 gap-y-2"> <p class="font-semibold"> ${renderComponent($$result, "FormattedDate", $$FormattedDate, { "date": data.publishDate, "dateTimeOptions": dateTimeOptions })} /${" "} ${remarkPluginFrontmatter.minutesRead} </p> ${data.updatedDate && renderTemplate`<span class="rounded-lg bg-quote/10 p-1 text-quote">
Last Updated:
${renderComponent($$result, "FormattedDate", $$FormattedDate, { "class": "ms-1", "date": data.updatedDate, "dateTimeOptions": dateTimeOptions })} </span>`} </div> ${!!data.tags?.length && renderTemplate`<div class="mt-2"> <svg aria-hidden="true" class="inline-block h-6 w-6" fill="none" focusable="false" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path d="M0 0h24v24H0z" fill="none" stroke="none"></path> <path d="M7.859 6h-2.834a2.025 2.025 0 0 0 -2.025 2.025v2.834c0 .537 .213 1.052 .593 1.432l6.116 6.116a2.025 2.025 0 0 0 2.864 0l2.834 -2.834a2.025 2.025 0 0 0 0 -2.864l-6.117 -6.116a2.025 2.025 0 0 0 -1.431 -.593z"></path> <path d="M17.573 18.407l2.834 -2.834a2.025 2.025 0 0 0 0 -2.864l-7.117 -7.116"></path> <path d="M6 9h-.01"></path> </svg> ${data.tags.map((tag, i) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate` <a${addAttribute(`View more blogs with the tag ${tag}`, "aria-label")} class="cactus-link inline-block before:content-['#']" data-pagefind-filter="tag"${addAttribute(`/tags/${tag}/`, "href")}>${tag}</a>${i < data.tags.length - 1 && ", "}` })}`)} </div>`}`;
}, "/home/massimiliano/Documenti/Astro/portfolio-test-2/src/components/blog/Hero.astro", void 0);

const $$Astro$6 = createAstro("https://astro-cactus.chriswilliams.dev/");
const $$TOCHeading = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$TOCHeading;
  const {
    heading: { children, depth, slug, text }
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li${addAttribute(`${depth > 2 ? "ms-2" : ""}`, "class")}> <a${addAttribute(`Scroll to section: ${text}`, "aria-label")}${addAttribute(`block line-clamp-2 hover:text-accent ${depth <= 2 ? "mt-3" : "mt-2 text-[0.6875rem]"}`, "class")}${addAttribute(`#${slug}`, "href")}><span class="me-0.5">#</span>${text}</a> ${!!children.length && renderTemplate`<ul> ${children.map((subheading) => renderTemplate`${renderComponent($$result, "Astro.self", Astro2.self, { "heading": subheading })}`)} </ul>`} </li>`;
}, "/home/massimiliano/Documenti/Astro/portfolio-test-2/src/components/blog/TOCHeading.astro", void 0);

const $$Astro$5 = createAstro("https://astro-cactus.chriswilliams.dev/");
const $$TOC = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$TOC;
  const { headings } = Astro2.props;
  const toc = generateToc(headings);
  return renderTemplate`${maybeRenderHead()}<aside class="sticky top-20 order-2 -me-32 hidden basis-64 lg:block"> <h2 class="font-semibold text-accent-2">Table of Contents</h2> <ul class="mt-4 text-xs"> ${toc.map((heading) => renderTemplate`${renderComponent($$result, "TOCHeading", $$TOCHeading, { "heading": heading })}`)} </ul> </aside>`;
}, "/home/massimiliano/Documenti/Astro/portfolio-test-2/src/components/blog/TOC.astro", void 0);

const $$Astro$4 = createAstro("https://astro-cactus.chriswilliams.dev/");
const $$Comments = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Comments;
  const { mentions } = Astro2.props;
  const validComments = ["mention-of", "in-reply-to"];
  const comments = mentions.filter(
    (mention) => validComments.includes(mention["wm-property"]) && mention.content?.text
  );
  return renderTemplate`${!!comments.length && renderTemplate`${maybeRenderHead()}<div><p class="mb-0 text-accent-2"><strong>${comments.length}</strong> Mention${comments.length > 1 ? "s" : ""}</p><ul class="mt-0 divide-y divide-textColor/20 ps-0" role="list">${comments.map((mention) => renderTemplate`<li class="my-0 flex items-start gap-x-5 py-5">${mention.author?.photo && mention.author.photo !== "" ? mention.author.url && mention.author.url !== "" ? renderTemplate`<a class="not-prose shrink-0 overflow-hidden rounded-full outline-none ring-2 ring-textColor hover:ring-4 hover:ring-link focus-visible:ring-4 focus-visible:ring-link"${addAttribute(mention.author.url, "href")} rel="noopener noreferrer" target="_blank"${addAttribute(mention.author.name, "title")}>${renderComponent($$result, "Image", $$Image, { "alt": mention.author?.name, "class": "my-0 h-12 w-12", "height": 48, "src": mention.author?.photo, "width": 48 })}</a>` : renderTemplate`${renderComponent($$result, "Image", $$Image, { "alt": mention.author?.name, "class": "my-0 h-12 w-12 rounded-full", "height": 48, "src": mention.author?.photo, "width": 48 })}` : null}<div class="flex-auto"><div class="flex items-center justify-between gap-x-2"><p class="my-0 line-clamp-1 font-semibold text-accent-2">${mention.author?.name}</p><a aria-labelledby="cmt-source" class="not-prose hover:text-link"${addAttribute(mention.url, "href")} rel="noopener noreferrer" target="_blank"><span class="hidden" id="cmt-source">
Vist the source of this webmention
</span>${renderComponent($$result, "Icon", $$Icon, { "aria-hidden": "true", "class": "h-5 w-5", "focusable": "false", "name": "mdi:open-in-new" })}</a></div><p class="mb-0 mt-1 break-words [word-break:break-word]">${mention.content?.text}</p></div></li>`)}</ul></div>`}`;
}, "/home/massimiliano/Documenti/Astro/portfolio-test-2/src/components/blog/webmentions/Comments.astro", void 0);

const $$Astro$3 = createAstro("https://astro-cactus.chriswilliams.dev/");
const $$Likes = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Likes;
  const { mentions } = Astro2.props;
  const MAX_LIKES = 10;
  const likes = mentions.filter((mention) => mention["wm-property"] == "like-of");
  const likesToShow = likes.filter((like) => like.author?.photo && like.author.photo !== "").slice(0, MAX_LIKES);
  return renderTemplate`${!!likes.length && renderTemplate`${maybeRenderHead()}<div><p class="mb-0 text-accent-2"><strong>${likes.length}</strong>${likes.length > 1 ? " People" : " Person"} liked this
</p>${!!likesToShow.length && renderTemplate`<ul class="flex list-none flex-wrap overflow-hidden ps-2" role="list">${likesToShow.map((like) => renderTemplate`<li class="-ms-2"><a class="not-prose relative inline-block overflow-hidden rounded-full outline-none ring-2 ring-textColor hover:z-10 hover:ring-4 hover:ring-link focus-visible:z-10 focus-visible:ring-4 focus-visible:ring-link"${addAttribute(like.author?.url, "href")} rel="noopener noreferrer" target="_blank"${addAttribute(like.author?.name, "title")}>${renderComponent($$result, "Image", $$Image, { "alt": like.author.name, "class": "my-0 inline-block h-12 w-12", "height": 48, "src": like.author.photo, "width": 48 })}</a></li>`)}</ul>`}</div>`}`;
}, "/home/massimiliano/Documenti/Astro/portfolio-test-2/src/components/blog/webmentions/Likes.astro", void 0);

const $$Astro$2 = createAstro("https://astro-cactus.chriswilliams.dev/");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Index;
  const url = new URL(Astro2.url.pathname, Astro2.site);
  const webMentions = await getWebmentionsForUrl(`${url}`);
  if (!webMentions.length) return;
  return renderTemplate`${!!webMentions.length && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<hr class="border-solid"><h2 class="mb-8 before:hidden">Webmentions for this post</h2><div class="space-y-10">${renderComponent($$result2, "Likes", $$Likes, { "mentions": webMentions })}${renderComponent($$result2, "Comments", $$Comments, { "mentions": webMentions })}</div><p class="mt-8">
Responses powered by${" "}<a href="https://webmention.io" rel="noopener noreferrer" target="_blank">
Webmentions
</a></p>` })}`}`;
}, "/home/massimiliano/Documenti/Astro/portfolio-test-2/src/components/blog/webmentions/index.astro", void 0);

const $$Astro$1 = createAstro("https://astro-cactus.chriswilliams.dev/");
const $$BlogPost = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BlogPost;
  const { post } = Astro2.props;
  const {
    data: { description, ogImage, publishDate, title, updatedDate },
    slug
  } = post;
  const socialImage = ogImage ?? `/og-image/${slug}.png`;
  const articleDate = updatedDate?.toISOString() ?? publishDate.toISOString();
  const { headings } = await post.render();
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$Base, { "meta": { articleDate, description, ogImage: socialImage, title } }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="gap-x-10 lg:flex lg:items-start"> ${!!headings.length && renderTemplate`${renderComponent($$result2, "TOC", $$TOC, { "headings": headings })}`} <article class="flex-grow break-words" data-pagefind-body> <div id="blog-hero">${renderComponent($$result2, "BlogHero", $$Hero, { "content": post })}</div> <div class="prose prose-sm prose-cactus mt-12 prose-headings:font-semibold prose-headings:text-accent-2 prose-headings:before:absolute prose-headings:before:-ms-4 prose-headings:before:text-accent sm:prose-headings:before:content-['#'] sm:prose-th:before:content-none"> ${renderSlot($$result2, $$slots["default"])} ${renderComponent($$result2, "WebMentions", $$Index, {})} </div> </article> </div> <button aria-label="Back to Top" class="z-90 fixed bottom-8 end-4 flex h-10 w-10 translate-y-28 items-center justify-center rounded-full border-2 border-transparent bg-zinc-200 text-3xl opacity-0 transition-all duration-300 hover:border-zinc-400 data-[show=true]:translate-y-0 data-[show=true]:opacity-100 dark:bg-zinc-700 sm:end-8 sm:h-12 sm:w-12" data-show="false" id="to-top-btn"><svg aria-hidden="true" class="h-6 w-6" fill="none" focusable="false" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path d="M4.5 15.75l7.5-7.5 7.5 7.5" stroke-linecap="round" stroke-linejoin="round"></path> </svg> </button> ` })} `;
}, "/home/massimiliano/Documenti/Astro/portfolio-test-2/src/layouts/BlogPost.astro", void 0);

const $$Astro = createAstro("https://astro-cactus.chriswilliams.dev/");
const getStaticPaths = async () => {
  const blogEntries = await getAllPosts();
  return blogEntries.map((entry) => ({
    params: { slug: entry.slug },
    props: { entry }
  }));
};
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { entry } = Astro2.props;
  const { Content } = await entry.render();
  return renderTemplate`${renderComponent($$result, "PostLayout", $$BlogPost, { "post": entry }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Content", Content, {})} ` })}`;
}, "/home/massimiliano/Documenti/Astro/portfolio-test-2/src/pages/posts/[...slug].astro", void 0);

const $$file = "/home/massimiliano/Documenti/Astro/portfolio-test-2/src/pages/posts/[...slug].astro";
const $$url = "/posts/[...slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$,
	file: $$file,
	getStaticPaths,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
