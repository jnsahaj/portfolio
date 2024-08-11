import { HEADER_LINKS, Page } from "../constants";
import { clsx } from "clsx";

export default function Header({ activeKey }: { activeKey: Page }) {
    const links = HEADER_LINKS;

    return (
        <header className="py-4">
            <nav>
                <ul className="flex font-thin list-none m-0 p-0 gap-4">
                    {links.map((link) => {
                        const isLinkActive = link.key === activeKey;
                        return (
                            <li>
                                <a
                                    className={clsx("hover:text-white", {
                                        "text-white underline underline-offset-8 decoration-gray-400": isLinkActive,
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
