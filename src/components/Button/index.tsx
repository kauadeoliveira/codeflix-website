import { ButtonType } from "@/types/components"

export const Button = ({ children, mode, route, onClick, Icon }: ButtonType) => {
    if(route){
        return(
            <a
             href={route}
             onClick={onClick}
             className={`${mode === 'dark' ? 'bg-zinc-800 text-white' :
             mode === 'light' ? 'bg-slate-50 text-black' : 'bg-bg-disabled text-text-disabled'}
             ${mode === 'dark' ? 'hover:bg-zinc-700' : mode === 'light' ? 'hover:bg-slate-200' : ''}
             ${mode === 'disabled' ? 'cursor-default' : 'cursor-pointer'}
             font-poppins font-semibold capitalize rounded-md flex justify-center items-center gap-[2px] p-2 min-w-[120px] text-sm`}
            >
                {Icon && <Icon className="text-lg"/>}
                {children}
            </a>
        )
    }
    else{
        return(
            <button
             onClick={onClick}
             className={`${mode === 'dark' ? 'bg-zinc-800 text-white' :
             mode === 'light' ? 'bg-slate-50 text-black' : 'bg-bg-disabled text-text-disabled'}
             ${mode === 'dark' ? 'hover:bg-zinc-700' : mode === 'light' ? 'hover:bg-slate-200' : ''}
             ${mode === 'disabled' ? 'cursor-default' : 'cursor-pointer'}
             font-poppins font-semibold capitalize rounded-md flex justify-center items-center gap-[2px] p-2 min-w-[120px] text-sm`}
            >
                {Icon && <Icon className="text-lg"/>}
                {children}
            </button>
        )
    }
}