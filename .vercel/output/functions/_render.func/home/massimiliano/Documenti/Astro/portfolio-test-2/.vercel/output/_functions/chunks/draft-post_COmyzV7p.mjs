import { a as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_Ttn3toyz.mjs';

const html = "<p>If this is working correctly, this post should only be accessible in a dev environment, as well as any tags that are unique to this post.</p>";

				const frontmatter = {"title":"A working draft title","description":"This post is for testing the draft post functionality","publishDate":"10 March 2024","tags":["test"],"draft":true,"minutesRead":"1 min read"};
				const file = "/home/massimiliano/Documenti/Astro/portfolio-test-2/src/content/post/draft-post.md";
				const url = undefined;
				function rawContent() {
					return "\nIf this is working correctly, this post should only be accessible in a dev environment, as well as any tags that are unique to this post.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
