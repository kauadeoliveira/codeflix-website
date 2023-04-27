import Link from "next/link"
import type { NavItemProps } from "../../../types/navItem"

export const MenuItem = ({ href, children }: NavItemProps) => (
    <Link href={href} className="font-poppins font-bold uppercase border-b">
        {children}
    </Link>
)