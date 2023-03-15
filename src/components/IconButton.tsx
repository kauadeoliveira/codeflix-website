import { ButtonType } from "@/types/button"

interface IconButtonType extends ButtonType {
    Icon: React.ElementType;
}

export default function IconButton({ children, Icon, mode, onClick, route }: ButtonType) {
    const iconButtonStyleClasses = `
        text-[10px] font-poppins flex flex-col items-center font-semibold
        ${mode === 'dark' ? 'text-black' : 'text-white'}
    `

    if(route){
        return(
            <a href={route} onClick={onClick} className={iconButtonStyleClasses}>
                {Icon && <Icon />}
                {children}
            </a>
        )
    }
    else{
        return(
            <button onClick={onClick} className={iconButtonStyleClasses}>
                {Icon && <Icon className="text-xl"/>}
                {children}
            </button>
        )
    }
}