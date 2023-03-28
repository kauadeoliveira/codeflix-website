import { ButtonType } from "@/types/button"

export const IconButton = ({ children, Icon, mode, onClick, route }: ButtonType) => {
    if(route){
        return(
            <a
             href={route}
             onClick={onClick}
             className={`text-[10px] font-poppins flex flex-col items-center font-semibold
             ${mode === 'dark' ? 'text-black' : mode === 'light' ? 'text-white' : 'text-text-disabled'}`}
            >
                {Icon && <Icon />}
                {children}
            </a>
        )
    }
    else{
        return(
            <button
             onClick={onClick}
             className={`text-[10px] font-poppins flex flex-col items-center font-semibold
             ${mode === 'dark' ? 'text-black' : mode === 'light' ? 'text-white' : 'text-text-disabled'}`}
            >
                {Icon && <Icon className="text-xl"/>}
                {children}
            </button>
        )
    }
}