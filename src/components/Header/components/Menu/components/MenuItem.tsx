import { NavItemProp } from "@/components/Header/types/navItem"
import Link from "next/link"

export const MenuItem = ({ href, children }: NavItemProp) => (
    <Link href={href} className="font-poppins font-bold uppercase border-b">
        {children}
    </Link>
)