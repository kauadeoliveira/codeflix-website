import { ChildrenType } from "@/types/children";
import { IconType } from "react-icons/lib";

type ButtonType = {
    children: ChildrenType;
    mode: 'dark' | 'light';
    route?: string;
    onClick?: () => void;
}

export default function Button({ children, mode, route, onClick }: ButtonType) {
    const buttonClass = `
        ${mode === 'dark' ? 'bg-zinc-800 text-white' : 'bg-[#FAFBFC] text-black'} py-1 px-2 w-full
        font-poppins font-semibold text-lg capitalize rounded-md flex items-center gap-[2px]
        ${mode === 'dark' ? 'hover:bg-zinc-700' : 'hover:bg-[#ebebeb]'}`

    if(route){
        return(
            <a href={route} onClick={onClick} className={buttonClass}>
                {children}
            </a>
        )
    }
    else{
        return(
            <button onClick={onClick} className={buttonClass}>
                {children}
            </button>
        )
    }
}