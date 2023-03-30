import { ButtonType } from "@/types/components"
/*
    Um componente de botão que possui 3 opções de estilos disponiveis e também aceita icones.

    @params {children} children - Tudo que for colocado dentro de Button será seu conteudo.
    @params {string} mode - O botão possui 3 modos: dark, light e disabled, cada um com um estilo diferente.
    @params {string} route - Rota que o botão deve acessar
    @params {function} onClick - função que vai ser chamada quando o botão for clicado.
    @params {component} Icon - Icone do botão.
*/
export const Button = ({ children, mode, route, onClick, Icon }: ButtonType) => {
    // Se Button receber alguma rota, ele será uma tag HTML <a>
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
    // Se o Button não receber nenhuma rota, ele será uma tag HTML <button>
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