import { getCollection, type CollectionEntry } from "astro:content";
import { ImageResponse } from "@vercel/og";

interface Props {
    params: { slug: string };
    props: { post: CollectionEntry<"blog"> };
}

export async function GET({ props }: Props) {
    const { post } = props;

    // Astro doesn't support tsx endpoints so usign React-element objects
    const html = {
        type: "div",
        props: {
            children: [
                {
                    type: "div",
                    props: {
                        tw: "absolute inset-0",
                        style: {
                            background: "linear-gradient(to bottom right, #121212, #1a1a1a)",
                            maskImage: "radial-gradient(circle, rgba(0,0,0,0.4) 20%, rgba(0,0,0,1) 80%)",
                        },
                    },
                },
                {
                    type: "div",
                    props: {
                        tw: "absolute inset-0 grid grid-cols-12 grid-rows-6 pointer-events-none",
                        style: {
                            backgroundImage:
                                "linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px)",
                            backgroundSize: "100px 100px",
                        },
                    },
                },
                {
                    type: "div",
                    props: {
                        tw: "px-12 flex justify-center items-center text-center relative",
                        children: [
                            {
                                type: "div",
                                props: {
                                    style: {
                                        fontSize: "54px",
                                        color: "#f5f5f5",
                                        lineHeight: "1.4",
                                    },
                                    children: post.data.title,
                                },
                            },
                        ],
                    },
                },
                {
                    type: "div",
                    props: {
                        tw: "absolute right-[40px] bottom-[40px] flex items-center",
                        children: [
                            {
                                type: "div",
                                props: {
                                    tw: "text-gray-400 text-xl",
                                    style: {},
                                    children: "Sahaj Jain",
                                },
                            },
                            {
                                type: "div",
                                props: {
                                    tw: "px-2 text-xl text-gray-500",
                                    children: "|",
                                },
                            },
                            {
                                type: "div",
                                props: {
                                    tw: "text-xl text-gray-400",
                                    children: "Blog",
                                },
                            },
                            {
                                type: "div",
                                props: {
                                    tw: "px-2 text-xl text-gray-500",
                                    children: "|",
                                },
                            },
                            {
                                type: "div",
                                props: {
                                    tw: "text-xl text-gray-400",
                                    children: "iamsahaj.xyz",
                                },
                            },
                        ],
                    },
                },
            ],
            tw: "w-full h-full flex items-center justify-center relative px-22",
            style: {
                background: "#121212",
            },
        },
    };

    // @ts-expect-error: Astro doesn't support tsx endpoints
    return new ImageResponse(html, {
        width: 1200,
        height: 600,
    });
}

// to generate an image for each blog posts in a collection
export async function getStaticPaths() {
    const blogPosts = await getCollection("blog");
    return blogPosts.map((post) => ({
        params: { slug: post.slug },
        props: { post },
    }));
}
