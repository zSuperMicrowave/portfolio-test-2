import { c as createAstro, a as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_Ttn3toyz.mjs';
import { A as Astro__Z1USaxp } from '../chunks/about-astro_CDQkEr_X.mjs';
import { $ as $$Base } from '../chunks/Base_SKkQFkS_.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_Bp7AdsTg.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://astro-cactus.chriswilliams.dev/");
const $$About = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$About;
  const meta = {
    description: "I'm a starter theme for Astro.build",
    title: "About"
  };
  return renderTemplate`${renderComponent($$result, "PageLayout", $$Base, { "meta": meta }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="space-y-6"> <h1 class="title">About</h1> <p>
Hi, I’m a starter Astro. I’m particularly great for getting you started with your own blogging
			website.
</p> <div class="flex justify-center"> ${renderComponent($$result2, "Image", $$Image, { "alt": "A cartoon cactus looking at the 'Astro.build' logo", "fetchpriority": "high", "loading": "eager", "src": Astro__Z1USaxp })} </div> <p>Here are my some of my awesome built in features:</p> <ul class="list-inside list-disc"> <li>I'm ultra fast as I'm a static site</li> <li>I'm fully responsive</li> <li>I come with a light and dark mode</li> <li>I'm easy to customise and add additional content</li> <li>I have Tailwind CSS styling</li> <li>Shiki code syntax highlighting</li> <li>Satori for auto generating OG images for blog posts</li> </ul> <p>
Clone or fork my <a aria-label="github repository" class="cactus-link inline-block" href="https://github.com/chrismwilliams/astro-cactus" rel="noopener noreferrer" target="_blank">repo</a> if you like me!
</p> </div> ` })}`;
}, "/home/massimiliano/Documenti/Astro/portfolio-test-2/src/pages/about.astro", void 0);

const $$file = "/home/massimiliano/Documenti/Astro/portfolio-test-2/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$About,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
