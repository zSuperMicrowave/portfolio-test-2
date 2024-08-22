import { c as createAstro, a as createComponent, r as renderTemplate, d as addAttribute, b as renderComponent, F as Fragment, m as maybeRenderHead, f as renderHead, e as renderSlot } from './astro/server_Ttn3toyz.mjs';
import { s as siteConfig, m as menuLinks } from './site.config_CjUAzYDY.mjs';
/* empty css                          */
import { $ as $$Image } from './_astro_assets_Bp7AdsTg.mjs';

const $$Astro$4 = createAstro("https://astro-cactus.chriswilliams.dev/");
const $$BaseHead = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$BaseHead;
  const { articleDate, description, ogImage, title } = Astro2.props;
  const titleSeparator = "\u2022";
  const siteTitle = `${title} ${titleSeparator} ${siteConfig.title}`;
  const canonicalURL = new URL(Astro2.url.pathname, Astro2.site);
  const socialImageURL = new URL(ogImage ? ogImage : "/social-card.png", Astro2.url).href;
  return renderTemplate`<meta charset="utf-8"><meta content="width=device-width, initial-scale=1.0, shrink-to-fit=no" name="viewport"><meta content="IE=edge" http-equiv="X-UA-Compatible"><title>${siteTitle}</title><link href="/favicon.ico" rel="icon" sizes="any"><link href="/icon.svg" rel="icon" type="image/svg+xml"><link href="/apple-touch-icon.png" rel="apple-touch-icon"><link href="/manifest.webmanifest" rel="manifest"><link${addAttribute(canonicalURL, "href")} rel="canonical"><meta${addAttribute(siteTitle, "content")} name="title"><meta${addAttribute(description, "content")} name="description"><meta${addAttribute(siteConfig.author, "content")} name="author"><meta content="" name="theme-color"><meta${addAttribute(articleDate ? "article" : "website", "content")} property="og:type"><meta${addAttribute(title, "content")} property="og:title"><meta${addAttribute(description, "content")} property="og:description"><meta${addAttribute(canonicalURL, "content")} property="og:url"><meta${addAttribute(siteConfig.title, "content")} property="og:site_name"><meta${addAttribute(siteConfig.ogLocale, "content")} property="og:locale"><meta${addAttribute(socialImageURL, "content")} property="og:image"><meta content="1200" property="og:image:width"><meta content="630" property="og:image:height">${articleDate && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`<meta${addAttribute(siteConfig.author, "content")} property="article:author"><meta${addAttribute(articleDate, "content")} property="article:published_time">` })}`}<meta content="summary_large_image" property="twitter:card"><meta${addAttribute(canonicalURL, "content")} property="twitter:url"><meta${addAttribute(title, "content")} property="twitter:title"><meta${addAttribute(description, "content")} property="twitter:description"><meta${addAttribute(socialImageURL, "content")} property="twitter:image"><link href="/sitemap-index.xml" rel="sitemap"><link href="/rss.xml" rel="alternate"${addAttribute(siteConfig.title, "title")} type="application/rss+xml">${siteConfig.webmentions && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`<link${addAttribute(siteConfig.webmentions.link, "href")} rel="webmention">${siteConfig.webmentions.pingback && renderTemplate`<link${addAttribute(siteConfig.webmentions.pingback, "href")} rel="pingback">`}` })}`}<meta${addAttribute(Astro2.generator, "content")} name="generator">`;
}, "/home/massimiliano/Documenti/Astro/portfolio-test-2/src/components/BaseHead.astro", void 0);

const $$SkipLink = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<a class="sr-only focus:not-sr-only focus:fixed focus:start-1 focus:top-1.5" href="#main">skip to content
</a>`;
}, "/home/massimiliano/Documenti/Astro/portfolio-test-2/src/components/SkipLink.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$ThemeProvider = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template([`<script>
	const lightModePref = window.matchMedia("(prefers-color-scheme: light)");

	function getUserPref() {
		const storedTheme = typeof localStorage !== "undefined" && localStorage.getItem("theme");
		return storedTheme || (lightModePref.matches ? "light" : "dark");
	}

	function setTheme(newTheme) {
		if (newTheme !== "light" && newTheme !== "dark") {
			return console.warn(
				\`Invalid theme value '\${newTheme}' received. Expected 'light' or 'dark'.\`,
			);
		}

		const root = document.documentElement;

		// root already set to newTheme, exit early
		if (newTheme === root.getAttribute("data-theme")) {
			return;
		}

		root.setAttribute("data-theme", newTheme);

		const colorThemeMetaTag = document.querySelector("meta[name='theme-color']");
		const bgColour = getComputedStyle(document.body).getPropertyValue("--theme-bg");
		colorThemeMetaTag.setAttribute("content", \`hsl(\${bgColour})\`);
		if (typeof localStorage !== "undefined") {
			localStorage.setItem("theme", newTheme);
		}
	}

	// initial setup
	setTheme(getUserPref());

	// View Transitions hook to restore theme
	document.addEventListener("astro:after-swap", () => setTheme(getUserPref()));

	// listen for theme-change custom event, fired in src/components/ThemeToggle.astro
	document.addEventListener("theme-change", (e) => {
		setTheme(e.detail.theme);
	});

	// listen for prefers-color-scheme change.
	lightModePref.addEventListener("change", (e) => setTheme(e.matches ? "light" : "dark"));
<\/script>`], [`<script>
	const lightModePref = window.matchMedia("(prefers-color-scheme: light)");

	function getUserPref() {
		const storedTheme = typeof localStorage !== "undefined" && localStorage.getItem("theme");
		return storedTheme || (lightModePref.matches ? "light" : "dark");
	}

	function setTheme(newTheme) {
		if (newTheme !== "light" && newTheme !== "dark") {
			return console.warn(
				\\\`Invalid theme value '\\\${newTheme}' received. Expected 'light' or 'dark'.\\\`,
			);
		}

		const root = document.documentElement;

		// root already set to newTheme, exit early
		if (newTheme === root.getAttribute("data-theme")) {
			return;
		}

		root.setAttribute("data-theme", newTheme);

		const colorThemeMetaTag = document.querySelector("meta[name='theme-color']");
		const bgColour = getComputedStyle(document.body).getPropertyValue("--theme-bg");
		colorThemeMetaTag.setAttribute("content", \\\`hsl(\\\${bgColour})\\\`);
		if (typeof localStorage !== "undefined") {
			localStorage.setItem("theme", newTheme);
		}
	}

	// initial setup
	setTheme(getUserPref());

	// View Transitions hook to restore theme
	document.addEventListener("astro:after-swap", () => setTheme(getUserPref()));

	// listen for theme-change custom event, fired in src/components/ThemeToggle.astro
	document.addEventListener("theme-change", (e) => {
		setTheme(e.detail.theme);
	});

	// listen for prefers-color-scheme change.
	lightModePref.addEventListener("change", (e) => setTheme(e.matches ? "light" : "dark"));
<\/script>`])));
}, "/home/massimiliano/Documenti/Astro/portfolio-test-2/src/components/ThemeProvider.astro", void 0);

const $$Astro$3 = createAstro("https://astro-cactus.chriswilliams.dev/");
const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Footer;
  const year = (/* @__PURE__ */ new Date()).getFullYear();
  return renderTemplate`${maybeRenderHead()}<footer class="mt-auto flex w-full flex-col items-center justify-center gap-y-2 pb-4 pt-20 text-center align-top font-semibold text-gray-600 dark:text-gray-400 sm:flex-row sm:justify-between sm:text-xs"> <div class="me-0 sm:me-4">
&copy; ${siteConfig.author} ${year}.<span class="inline-block">&nbsp;🚀&nbsp;Astro Cactus</span> </div> <nav aria-label="More on this site" class="flex gap-x-2 sm:gap-x-0 sm:divide-x sm:divide-gray-500"> ${menuLinks.map((link) => renderTemplate`<a class="px-4 py-2 sm:py-0 sm:hover:text-textColor sm:hover:underline"${addAttribute(link.path, "href")}> ${link.title} </a>`)} </nav> </footer>`;
}, "/home/massimiliano/Documenti/Astro/portfolio-test-2/src/components/layout/Footer.astro", void 0);

const $$Astro$2 = createAstro("https://astro-cactus.chriswilliams.dev/");
const $$Search = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Search;
  return renderTemplate`${renderComponent($$result, "site-search", "site-search", { "class": "ms-1 sm:ms-4", "id": "search", "data-astro-cid-otpdt6jm": true }, { "default": () => renderTemplate` ${maybeRenderHead()}<button class="flex h-9 w-9 items-center justify-center rounded-md text-textColor transition-all hover:ring-2" data-open-modal disabled data-astro-cid-otpdt6jm> <svg aria-label="search" class="h-7 w-7" fill="none" height="16" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg" data-astro-cid-otpdt6jm> <path d="M0 0h24v24H0z" stroke="none" data-astro-cid-otpdt6jm></path> <path d="M3 10a7 7 0 1 0 14 0 7 7 0 1 0-14 0M21 21l-6-6" data-astro-cid-otpdt6jm></path> </svg> </button> <dialog aria-label="search" class="h-full max-h-full w-full max-w-full border border-zinc-400 bg-bgColor shadow backdrop:backdrop-blur sm:mx-auto sm:mb-auto sm:mt-16 sm:h-max sm:max-h-[calc(100%-8rem)] sm:min-h-[15rem] sm:w-5/6 sm:max-w-[48rem] sm:rounded-md" data-astro-cid-otpdt6jm> <div class="dialog-frame flex flex-col gap-4 p-6 pt-12 sm:pt-6" data-astro-cid-otpdt6jm> <button class="ms-auto cursor-pointer rounded-md bg-zinc-200 p-2 font-semibold dark:bg-zinc-700" data-close-modal data-astro-cid-otpdt6jm>Close</button> ${renderTemplate`<div class="search-container" data-astro-cid-otpdt6jm> <div id="cactus__search" data-astro-cid-otpdt6jm></div> </div>`} </div> </dialog> ` })}   `;
}, "/home/massimiliano/Documenti/Astro/portfolio-test-2/src/components/Search.astro", void 0);

const $$ThemeToggle = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "theme-toggle", "theme-toggle", { "class": "ms-1 sm:ms-4" }, { "default": () => renderTemplate` ${maybeRenderHead()}<button class="relative h-9 w-9 rounded-md p-2 text-textColor transition-all hover:ring-2" type="button"> <span class="sr-only">Dark Theme</span> <svg aria-hidden="true" class="absolute start-1/2 top-1/2 h-7 w-7 -translate-x-1/2 -translate-y-1/2 scale-100 opacity-100 transition-all dark:scale-0 dark:opacity-0" fill="none" focusable="false" id="sun-svg" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M22 12L23 12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M12 2V1" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M12 23V22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M20 20L19 19" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M20 4L19 5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M4 20L5 19" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M4 4L5 5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M1 12L2 12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path> </svg> <svg aria-hidden="true" class="absolute start-1/2 top-1/2 h-7 w-7 -translate-x-1/2 -translate-y-1/2 scale-0 opacity-0 transition-all dark:scale-100 dark:opacity-100" fill="none" focusable="false" id="moon-svg" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path d="M0 0h24v24H0z" fill="none" stroke="none"></path> <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z"></path> <path d="M17 4a2 2 0 0 0 2 2a2 2 0 0 0 -2 2a2 2 0 0 0 -2 -2a2 2 0 0 0 2 -2"></path> <path d="M19 11h2m-1 -1v2"></path> </svg> </button> ` })} `;
}, "/home/massimiliano/Documenti/Astro/portfolio-test-2/src/components/ThemeToggle.astro", void 0);

const logo = new Proxy({"src":"/_astro/microwave-logo.B7hZH4i0.png","width":700,"height":700,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/massimiliano/Documenti/Astro/portfolio-test-2/src/assets/microwave-logo.png";
							}
							
							return target[name];
						}
					});

const $$Astro$1 = createAstro("https://astro-cactus.chriswilliams.dev/");
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Header;
  const url = new URL(Astro2.request.url);
  return renderTemplate`${maybeRenderHead()}<header class="group relative mb-28 flex" id="main-header"> <!-- I use this instead of the html base image to make sure that the image is already loaded before the page is shown --> ${renderComponent($$result, "Image", $$Image, { "src": logo, "alt": "a", "class": "invisible sm:visible hidden sm:block size-20 my-auto rounded-xl mx-3" })} <div class="flex flex-col justify-center w-full"> <!-- Upper header --> <div class="flex"> ${renderComponent($$result, "mobile-button", "mobile-button", { "class": "my-auto text-accent" }, { "default": () => renderTemplate` <button aria-expanded="false" aria-haspopup="menu" aria-label="Open main menu" class="group relative me-2 my-auto h-7 w-7 sm:invisible sm:hidden" id="toggle-navigation-menu" type="button"> <svg aria-hidden="true" class="absolute start-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 transition-all group-aria-expanded:scale-0 group-aria-expanded:opacity-0" fill="none" focusable="false" id="line-svg" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path d="M0.0 3h24m-24 6h24m-24 6h24" stroke-linecap="round" stroke-linejoin="round"></path> </svg> <svg aria-hidden="true" class="absolute start-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 scale-0 text-accent opacity-0 transition-all group-aria-expanded:scale-100 group-aria-expanded:opacity-100" class="text-accent" fill="none" focusable="false" id="cross-svg" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path d="M6 18L18 6M6 6l12 12" stroke-linecap="round" stroke-linejoin="round"></path> </svg> </button> ` })} <a${addAttribute(url.pathname === "/" ? "page" : false, "aria-current")} href="/" class="text-xl sm:text-3xl text-accent-2 font-bold">MICROWAVE'S BLOG</a> <!-- Keep on right --> <div class="flex ms-auto"> ${renderComponent($$result, "Search", $$Search, {})} ${renderComponent($$result, "ThemeToggle", $$ThemeToggle, {})} </div> </div> <hr class="h-px border-0 bg-quote mx-1 sm:my-1"> <!-- Lower header --> <div class="flex"> <span class="text-l sm:text-base">Massimiliano Dello Spirito Santo</span> <!-- Keep on right --> <div class="flex ms-auto"> <nav aria-label="Main menu" class="text-base absolute -inset-x-4 top-14 hidden flex-col items-end gap-y-4 rounded-md bg-bgColor/[.85] py-4 text-accent shadow backdrop-blur group-[.menu-open]:z-50 group-[.menu-open]:flex sm:static sm:z-auto sm:flex sm:flex-row sm:divide-x sm:divide-solid sm:divide-accent sm:rounded-none sm:bg-transparent sm:py-0 sm:shadow-none sm:backdrop-blur-none" id="navigation-menu"> ${menuLinks.map((link) => renderTemplate`<a${addAttribute(url.pathname === link.path ? "page" : false, "aria-current")} class="px-4 py-4 underline-offset-2 sm:py-0 sm:hover:underline" data-astro-prefetch${addAttribute(link.path, "href")}> ${link.title} </a>`)} </nav> </div> </div> <a${addAttribute(url.pathname === "/" ? "page" : false, "aria-current")} class="inline-flex items-center grayscale hover:filter-none sm:relative sm:inline-block" href="/"></a> </div> </header> `;
}, "/home/massimiliano/Documenti/Astro/portfolio-test-2/src/components/layout/Header.astro", void 0);

const $$Astro = createAstro("https://astro-cactus.chriswilliams.dev/");
const $$Base = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Base;
  const {
    meta: { articleDate, description = siteConfig.description, ogImage, title }
  } = Astro2.props;
  return renderTemplate`<html class="scroll-smooth"${addAttribute(siteConfig.lang, "lang")}> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "articleDate": articleDate, "description": description, "ogImage": ogImage, "title": title })}${renderHead()}</head> <body class="mx-auto flex min-h-screen max-w-4xl flex-col bg-bgColor px-4 pt-16 font-mono text-sm font-normal text-textColor antialiased sm:px-8"> ${renderComponent($$result, "ThemeProvider", $$ThemeProvider, {})} ${renderComponent($$result, "SkipLink", $$SkipLink, {})} ${renderComponent($$result, "Header", $$Header, {})} <main id="main"> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "/home/massimiliano/Documenti/Astro/portfolio-test-2/src/layouts/Base.astro", void 0);

export { $$Base as $ };
