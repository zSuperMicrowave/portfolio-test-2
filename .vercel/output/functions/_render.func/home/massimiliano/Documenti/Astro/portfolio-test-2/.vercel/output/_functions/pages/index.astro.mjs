import { a as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, b as renderComponent, c as createAstro } from '../chunks/astro/server_Ttn3toyz.mjs';
import { $ as $$Icon } from '../chunks/Icon_BYoJIT7Z.mjs';
import { $ as $$PostPreview } from '../chunks/PostPreview_CmEXyn9F.mjs';
import { g as getAllPosts, s as sortMDByDate } from '../chunks/post_SbBLdORX.mjs';
import { $ as $$Base } from '../chunks/Base_SKkQFkS_.mjs';
export { renderers } from '../renderers.mjs';

const $$SocialList = createComponent(($$result, $$props, $$slots) => {
  const socialLinks = [
    {
      friendlyName: "Github",
      link: "https://github.com/chrismwilliams/astro-cactus",
      name: "mdi:github"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-wrap items-end gap-x-2"> <p>Find me on</p> <ul class="flex flex-1 items-center gap-x-2 sm:flex-initial"> ${socialLinks.map(({ friendlyName, isWebmention, link, name }) => renderTemplate`<li class="flex"> <a class="inline-block p-1 sm:hover:text-link"${addAttribute(link, "href")}${addAttribute(`noopener noreferrer ${isWebmention ? "me authn" : ""}`, "rel")} target="_blank"> ${renderComponent($$result, "Icon", $$Icon, { "aria-hidden": "true", "class": "h-6 w-6", "focusable": "false", "name": name })} <span class="sr-only">${friendlyName}</span> </a> </li>`)} </ul> </div>`;
}, "/home/massimiliano/Documenti/Astro/portfolio-test-2/src/components/SocialList.astro", void 0);

const $$Astro = createAstro("https://astro-cactus.chriswilliams.dev/");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const MAX_POSTS = 10;
  const allPosts = await getAllPosts();
  const allPostsByDate = sortMDByDate(allPosts).slice(0, MAX_POSTS);
  const cactusTech = [
    {
      desc: "Build fast websites, faster.",
      href: "https://astro.build",
      title: "Astro"
    },
    {
      desc: "Rapidly build modern websites without ever leaving your HTML.",
      href: "https://tailwindcss.com",
      title: "Tailwind CSS"
    },
    {
      desc: "Simple and easy-to-use markup language.",
      href: "https://www.markdownguide.org/",
      title: "Markdown"
    },
    {
      desc: "Markdown for the component era.",
      href: "https://mdxjs.com/",
      title: "MDX"
    },
    {
      desc: "Generating png Open Graph images for blog posts.",
      href: "https://github.com/vercel/satori",
      title: "Satori"
    },
    {
      desc: "A fully static search library.",
      href: "https://pagefind.app/",
      title: "Pagefind"
    },
    {
      desc: "An easy to use Icon component for Astro.",
      href: "https://github.com/natemoo-re/astro-icon#readme",
      title: "Astro Icon"
    },
    {
      desc: "Highly customisable source code & syntax highlighter",
      href: "https://expressive-code.com/",
      title: "Expressive Code"
    }
  ];
  return renderTemplate`${renderComponent($$result, "PageLayout", $$Base, { "meta": { title: "Home" } }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section> <h1 class="title">Hello World!</h1> <hr class="h-px border-0 bg-quote my-2 mx-1"> <p class="mb-4 sm:text-base">
Hi, I’m a theme for Astro, an example of how you can use this starter to create a personal
			blog. If you want to know more about how you can customise me, add more posts, and make it
			your own, click on the github icon link below and it will take you to my repo.
</p> ${renderComponent($$result2, "SocialList", $$SocialList, {})} </section> <section aria-label="Blog post list" class="mt-16"> <h2 class="title text-xl">Posts</h2> <hr class="h-px border-0 bg-quote my-2 mx-2"> <ul class="space-y-4"> ${allPostsByDate.map((p) => renderTemplate`<li class="flex flex-col"> ${renderComponent($$result2, "PostPreview", $$PostPreview, { "post": p })} </li>`)} </ul> </section> <section class="mt-16"> <h2 class="title mb-4 text-xl">Technologies</h2> <dl class="space-y-4"> ${cactusTech.map(({ desc, href, title }) => renderTemplate`<div class="flex flex-col gap-2 sm:flex-row"> <dt> <span class="flex"> <a class="cactus-link"${addAttribute(href, "href")} rel="noopener noreferrer" target="_blank"> ${title} </a>
:
</span> </dt> <dd>${desc}</dd> </div>`)} </dl> </section> ` })}`;
}, "/home/massimiliano/Documenti/Astro/portfolio-test-2/src/pages/index.astro", void 0);

const $$file = "/home/massimiliano/Documenti/Astro/portfolio-test-2/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
