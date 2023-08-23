import { NAV_ITEMS } from "~/constants/Navbar";

export interface NavbarProps {
    className?: string
}

export default function Navbar({className}: NavbarProps) {
  return (
    <nav className={className}>
        <ul className="flex gap-[35px]">
            {
                NAV_ITEMS.map(
                    ({label, path}) => (
                        <li>
                            <a href={path}>{ label }</a>
                        </li>
                    )
                )
            }
        </ul>
    </nav>
  );
}
