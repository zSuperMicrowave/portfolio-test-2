import { s as siteConfig } from './site.config_CjUAzYDY.mjs';
import * as fs from 'node:fs';

const dateFormat = new Intl.DateTimeFormat(siteConfig.date.locale, siteConfig.date.options);
function getFormattedDate(date, options) {
  if (typeof options !== "undefined") {
    return new Date(date).toLocaleDateString(siteConfig.date.locale, {
      ...siteConfig.date.options,
      ...options
    });
  }
  return dateFormat.format(new Date(date));
}

const DOMAIN = "https://astro-cactus.chriswilliams.dev/";
const API_TOKEN = {"BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true, "SSR": true, "SITE": "https://astro-cactus.chriswilliams.dev/", "ASSETS_PREFIX": undefined}.WEBMENTION_API_KEY;
const CACHE_DIR = ".data";
const filePath = `${CACHE_DIR}/webmentions.json`;
const validWebmentionTypes = ["like-of", "mention-of", "in-reply-to"];
const hostName = new URL(DOMAIN).hostname;
async function fetchWebmentions(timeFrom, perPage = 1e3) {
  if (!API_TOKEN) {
    console.warn("No webmention api token specified in .env");
    return null;
  }
  let url = `https://webmention.io/api/mentions.jf2?domain=${hostName}&token=${API_TOKEN}&sort-dir=up&per-page=${perPage}`;
  if (timeFrom) url += `&since${timeFrom}`;
  const res = await fetch(url);
  if (res.ok) {
    const data = await res.json();
    return data;
  }
  return null;
}
function mergeWebmentions(a, b) {
  return Array.from(
    [...a.children, ...b.children].reduce((map, obj) => map.set(obj["wm-id"], obj), /* @__PURE__ */ new Map()).values()
  );
}
function filterWebmentions(webmentions) {
  return webmentions.filter((webmention) => {
    if (!validWebmentionTypes.includes(webmention["wm-property"])) return false;
    if (webmention["wm-property"] === "mention-of" || webmention["wm-property"] === "in-reply-to") {
      return webmention.content && webmention.content.text !== "";
    }
    return true;
  });
}
function writeToCache(data) {
  const fileContent = JSON.stringify(data, null, 2);
  if (!fs.existsSync(CACHE_DIR)) {
    fs.mkdirSync(CACHE_DIR);
  }
  fs.writeFile(filePath, fileContent, (err) => {
    if (err) throw err;
    console.log(`Webmentions saved to ${filePath}`);
  });
}
function getFromCache() {
  if (fs.existsSync(filePath)) {
    const data = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(data);
  }
  return {
    lastFetched: null,
    children: []
  };
}
async function getAndCacheWebmentions() {
  const cache = getFromCache();
  const mentions = await fetchWebmentions(cache.lastFetched);
  if (mentions) {
    mentions.children = filterWebmentions(mentions.children);
    const webmentions = {
      lastFetched: (/* @__PURE__ */ new Date()).toISOString(),
      // Make sure the first arg is the cache
      children: mergeWebmentions(cache, mentions)
    };
    writeToCache(webmentions);
    return webmentions;
  }
  return cache;
}
let webMentions;
async function getWebmentionsForUrl(url) {
  if (!webMentions) webMentions = await getAndCacheWebmentions();
  return webMentions.children.filter((entry) => entry["wm-target"] === url);
}

export { getWebmentionsForUrl as a, getFormattedDate as g };
