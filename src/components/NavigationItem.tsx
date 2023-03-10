import { ChildrenType } from "@/types/children";

type NavigationItemType = {
    route: string;
    children: ChildrenType
}

export default function NavigationItem({ route, children }: NavigationItemType) {
    return (
        <a 
         href={route}
         className='px-2 opacity-80 hover:opacity-100 relative after:content-[""]
         after:absolute after:bg-rose-500 after:h-[3px] after:w-0 after:transition-all after:duration-300
         after:left-0 after:-bottom-1 hover:after:w-full font-poppins
         '
        >
            {children}
        </a>
    )
}