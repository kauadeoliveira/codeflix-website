import { ButtonType } from "@/types/button";

export const Button = ({ children, mode, route, onClick, Icon }: ButtonType) => {
    const buttonStyleClasses = `
        ${mode === 'dark' ? 'bg-zinc-800 text-white' : 'bg-[#FAFBFC] text-black'}
        ${mode === 'dark' ? 'hover:bg-zinc-700' : 'hover:bg-[#ebebeb]'}
        font-poppins font-semibold capitalize rounded-md flex justify-center items-center gap-[2px] p-1 min-w-[120px]
    `

    if(route){
        return(
            <a href={route} onClick={onClick} className={buttonStyleClasses}>
                {Icon && <Icon />}
                {children}
            </a>
        )
    }
    else{
        return(
            <button onClick={onClick} className={buttonStyleClasses}>
                {Icon && <Icon className="text-lg"/>}
                {children}
            </button>
        )
    }
}