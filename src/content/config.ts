import { z, defineCollection } from "astro:content";

const blogCollection = defineCollection({
    type: "content",
    schema: z.object({
        title: z.string(),
        description: z.string().optional(),
        publishDate: z.coerce.date(),
        modifyDate: z.coerce.date().optional(),
        draft: z.boolean().optional(),
    }),
});

export const collections = {
    blog: blogCollection,
};
