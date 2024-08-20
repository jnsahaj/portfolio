import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import sanitizeHtml from "sanitize-html";
import MarkdownIt from "markdown-it";
const parser = new MarkdownIt();

export async function GET(context) {
    const blog = await getCollection("blog", ({ data }) => {
        return data.draft !== true;
    });

    return rss({
        site: context.site,
        title: "iamsahaj.xyz",
        description: "iamsahaj.xyz",
        items: blog.map((post) => ({
            title: post.data.title,
            description: post.data.description,
            pubDate: post.data.publishDate,
            link: `/blog/${post.slug}/`,
            content: sanitizeHtml(parser.render(post.body), {
                allowedTags: sanitizeHtml.defaults.allowedTags.concat(["img"]),
            }),
        })),
        customData: `<language>en-us</language>`,
    });
}
