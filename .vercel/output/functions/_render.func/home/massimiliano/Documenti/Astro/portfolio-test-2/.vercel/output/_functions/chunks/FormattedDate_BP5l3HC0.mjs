import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, s as spreadAttributes } from './astro/server_Ttn3toyz.mjs';
import { g as getFormattedDate } from './webmentions_3M6DywH5.mjs';

const $$Astro = createAstro("https://astro-cactus.chriswilliams.dev/");
const $$FormattedDate = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$FormattedDate;
  const { date, dateTimeOptions, ...attrs } = Astro2.props;
  const postDate = getFormattedDate(date, dateTimeOptions);
  return renderTemplate`${maybeRenderHead()}<time${addAttribute(date.toISOString(), "datetime")}${spreadAttributes(attrs)}> ${postDate} </time>`;
}, "/home/massimiliano/Documenti/Astro/portfolio-test-2/src/components/FormattedDate.astro", void 0);

export { $$FormattedDate as $ };
