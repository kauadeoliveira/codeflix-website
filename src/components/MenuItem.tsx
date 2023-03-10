import { ChildrenType } from "@/types/children"

type MenuItemType = {
    children: ChildrenType;
}

export default function MenuItem({ children }: MenuItemType) {
    return(
        <span className="font-poppins font-bold uppercase">
            {children}
        </span>
    )
}