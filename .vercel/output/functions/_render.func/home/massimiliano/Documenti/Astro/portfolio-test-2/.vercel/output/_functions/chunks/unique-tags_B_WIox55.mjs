const id = "unique-tags.md";
						const collection = "post";
						const slug = "unique-tags";
						const body = "\n## This post is to test zod transform\n\nIf you open the file `src/content/post/unique-tags.md`, the tags array has a number of duplicate blog strings of various cases.\n\nThese are removed as part of the removeDupsAndLowercase function found in `src/content/config.ts`.\n";
						const data = {description:"This post is used for validating if duplicate tags are removed, regardless of the string case",draft:false,publishDate:new Date(1675033200000),tags:["blog","test"],title:"Unique tags validation"};
						const _internal = {
							type: 'content',
							filePath: "/home/massimiliano/Documenti/Astro/portfolio-test-2/src/content/post/unique-tags.md",
							rawData: undefined,
						};

export { _internal, body, collection, data, id, slug };
