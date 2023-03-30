import { ButtonType } from "@/types/components/button"
/*
    Um componente de botão que possui 3 opções de estilos disponiveis e também aceita icones.

    @params {children} children - Tudo que for colocado dentro de Button será seu conteudo.
    @params {string} mode - O botão possui 3 modos: dark, light e disabled, cada um com um estilo diferente.
    @params {string} route - Rota que o botão deve acessar
    @params {function} onClick - função que vai ser chamada quando o botão for clicado.
    @params {component} Icon - Icone do botão.
*/

export const IconButton = ({ children, Icon, mode, onClick, href }: ButtonType) => {
    // Se Button receber alguma rota, ele será uma tag HTML <a>
    if(href){
        return(
            <a
             href={href}
             onClick={onClick}
             className={`text-[10px] font-poppins flex flex-col items-center font-semibold
             ${mode === 'dark' ? 'text-black' : mode === 'light' ? 'text-white' : 'text-text-disabled'}`}
            >
                {Icon && <Icon />}
                {children}
            </a>
        )
    }
    // Se o Button não receber nenhuma rota, ele será uma tag HTML <button>
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