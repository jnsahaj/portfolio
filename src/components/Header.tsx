import { HEADER_LINKS, Page } from "../constants";
import { clsx } from "clsx";

export default function Header({ activeKey }: { activeKey: Page }) {
    const links = HEADER_LINKS;

    return (
        <header className="py-4 px-8">
            <nav className="w-fit ml-auto">
                <ul className="flex text-sm list-none m-0 p-0 gap-4">
                    {links.map((link) => {
                        const isLinkActive = link.key === activeKey;
                        return (
                            <li>
                                <a
                                    className={clsx("hover:text-white", {
                                        "text-white": isLinkActive,
                                        "text-gray-400": !isLinkActive,
                                    })}
                                    href={link.href}
                                >
                                    {link.label}
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </header>
    );
}
