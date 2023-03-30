import type { ButtonType } from "@/types/components"

// Cada modo diferente do botão recebe um conjunto de classes diferentes.
const buttonClasses = {
    dark: 'bg-zinc-800 text-white hover:bg-zinc-700',
    light: 'bg-slate-50 text-black hover:bg-slate-200',
    disabled: 'bg-bg-disabled text-text-disabled cursor-default'
}

// Essa função retorna uma propriedade do objeto `buttonClasses` de acordo com o argumento recebido. Esse argumento é do sub-tipo `mode` que faz parte do tipo `ButtonType`, ou seja, apenas as opções "dark", "light" ou "disabled" são permitidas.
const getButtonClass = (mode: ButtonType['mode']) => buttonClasses[mode];


/*
    Um componente de botão que possui 3 opções de estilos disponiveis e também aceita icones.

    @params {children} children - Tudo que for colocado dentro de Button será seu conteudo.
    @params {string} mode - O botão possui 3 modos: dark, light e disabled, cada um com um estilo diferente.
    @params {string} route - Rota que o botão deve acessar
    @params {function} onClick - função que vai ser chamada quando o botão for clicado.
    @params {component} Icon - Icone do botão.
*/
export const Button = ({ children, mode, href, onClick, Icon }: ButtonType) => {
    // Seleciona um conjunto de classes entre `dark`, `light` ou `disabled` baseado no valor da prop `mode`
    const buttonClass = getButtonClass(mode)

    // Definindo os atributos HTML e eventos de acordo com as props recebidas
    const buttonProps = {
        href: mode !== 'disabled' ? href : undefined,
        onClick: mode !== 'disabled' ? onClick : undefined,
        className: `font-poppins font-semibold capitalize rounded-md flex justify-center items-center gap-[2px] p-2 min-w-[120px] text-sm ${buttonClass}`,
    }

    // Define se Button será uma tag HTML <a> ou <button>
    const Component = href ? 'a' : 'button';

    return(
        <Component {...buttonProps}>
            {Icon && <Icon />}
            {children}
        </Component>
    )
}



// `buttonClasses` e `getButtonClass` foram definidas fora do escopo do componente por questões de otimização, mas a diferença seria minima se tivesse dentro.