import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as renderComponent, d as addAttribute } from './astro/server_Ttn3toyz.mjs';
import { d as getPostSortDate } from './post_SbBLdORX.mjs';
import { $ as $$FormattedDate } from './FormattedDate_BP5l3HC0.mjs';

const $$Astro = createAstro("https://astro-cactus.chriswilliams.dev/");
const $$PostPreview = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PostPreview;
  const { as: Tag = "div", post, withDesc = false } = Astro2.props;
  const postDate = getPostSortDate(post);
  return renderTemplate`${maybeRenderHead()}<div class="flex sm:justify-between"> ${renderComponent($$result, "Tag", Tag, {}, { "default": ($$result2) => renderTemplate`${post.data.draft && renderTemplate`<span class="text-red-500">(Draft) </span>`}<span class="sm:text-lg text-accent no-underline font-bold">#</span> <a class="text-base sm:text-lg cactus-link text-accent-2" data-astro-prefetch${addAttribute(`/posts/${post.slug}/`, "href")}> ${post.data.title} </a> ` })} ${renderComponent($$result, "FormattedDate", $$FormattedDate, { "class": "text-quote text-base hidden invisible sm:block sm:visible", "date": postDate })} </div> ${withDesc && renderTemplate`<q class="line-clamp-3 italic">${post.data.description}</q>`} <div class="text-xs sm:text-right ms-4 sm:text-sm sm:ms-0"> ${post.data.tags.map((s, i) => renderTemplate`<a${addAttribute(`/tags/${s}/`, "href")} class="cactus-link">#${s}</a><span>${i < post.data.tags.length - 1 && ", "}</span>`)} </div>`;
}, "/home/massimiliano/Documenti/Astro/portfolio-test-2/src/components/blog/PostPreview.astro", void 0);

export { $$PostPreview as $ };
