import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute } from './astro/server_Ttn3toyz.mjs';

const $$Astro = createAstro("https://astro-cactus.chriswilliams.dev/");
const $$Paginator = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Paginator;
  const { nextUrl, prevUrl } = Astro2.props;
  return renderTemplate`${(prevUrl || nextUrl) && renderTemplate`${maybeRenderHead()}<nav class="mt-8 flex items-center gap-x-4">${prevUrl && renderTemplate`<a class="me-auto py-2 sm:hover:text-accent" data-astro-prefetch${addAttribute(prevUrl.url, "href")}>${prevUrl.srLabel && renderTemplate`<span class="sr-only">${prevUrl.srLabel}</span>`}${prevUrl.text ? prevUrl.text : "Previous"}</a>`}${nextUrl && renderTemplate`<a class="ms-auto py-2 sm:hover:text-accent" data-astro-prefetch${addAttribute(nextUrl.url, "href")}>${nextUrl.srLabel && renderTemplate`<span class="sr-only">${nextUrl.srLabel}</span>`}${nextUrl.text ? nextUrl.text : "Next"}</a>`}</nav>`}`;
}, "/home/massimiliano/Documenti/Astro/portfolio-test-2/src/components/Paginator.astro", void 0);

export { $$Paginator as $ };
