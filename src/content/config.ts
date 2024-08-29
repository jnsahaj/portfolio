import { z, defineCollection } from "astro:content";

const blogCollection = defineCollection({
    type: "content",
    schema: z.object({
        title: z.string(),
        description: z.string().optional(),
        publishDate: z.string().date(),
        modifyDate: z.string().date().optional(),
        tags: z.array(z.string()),
        draft: z.boolean().optional(),
    }),
});

export const collections = {
    blog: blogCollection,
};
