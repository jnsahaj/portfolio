export enum Page {
    ABOUT,
    PROJECTS,
}

export const HEADER_LINKS = [
    {
        key: Page.ABOUT,
        href: "/",
        label: "About",
    } as const,
    {
        key: Page.PROJECTS,
        href: "/projects",
        label: "Projects",
    } as const,
];
