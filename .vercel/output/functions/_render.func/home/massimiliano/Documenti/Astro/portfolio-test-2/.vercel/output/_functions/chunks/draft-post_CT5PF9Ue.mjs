const id = "draft-post.md";
						const collection = "post";
						const slug = "draft-post";
						const body = "\nIf this is working correctly, this post should only be accessible in a dev environment, as well as any tags that are unique to this post.\n";
						const data = {description:"This post is for testing the draft post functionality",draft:true,publishDate:new Date(1710025200000),tags:["test"],title:"A working draft title"};
						const _internal = {
							type: 'content',
							filePath: "/home/massimiliano/Documenti/Astro/portfolio-test-2/src/content/post/draft-post.md",
							rawData: undefined,
						};

export { _internal, body, collection, data, id, slug };
