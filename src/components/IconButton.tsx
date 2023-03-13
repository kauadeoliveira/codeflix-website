import { ButtonType } from "@/types/button"

interface IconButtonType extends ButtonType {
    Icon: React.ElementType;
}

export default function IconButton({ children, Icon, mode, onClick, route }: ButtonType) {
    const iconButtonClass = `
        text-
    `
    if(route){
        return(
            <a href={route} onClick={onClick}>
                {Icon && <Icon />}
                {children}
            </a>
        )
    }
    else{
        return(
            <button onClick={onClick}
            className={`text-[10px] font-poppins flex flex-col items-center font-semibold`}
            >
                {Icon && <Icon className="text-xl"/>}
                {children}
            </button>
        )
    }
}