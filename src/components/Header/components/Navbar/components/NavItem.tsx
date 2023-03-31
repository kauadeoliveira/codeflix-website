import Link from "next/link"
import { NavItemProps } from "../../../types/navItem"

export const NavItem = ({ href, children }: NavItemProps) => (
    <Link
     href={href}
     className="px-2 opacity-80 hover:opacity-100 relative after:content-[''] after:absolute after:bg-rose-500 after:h-[3px] after:w-0 after:transition-all after:duration-300 after:left-0 after:bottom-0 hover:after:w-full font-poppins"
    >
       {children}
   </Link>
)