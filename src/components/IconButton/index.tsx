import type { ButtonType } from "@/types/components/button"

// Um conjunto de classes tailwind para cada modo do Button.
const buttonClasses = {
    dark: 'text-black',
    light: 'text-white',
    disabled: 'text-text-disabled'
}

// Essa função retorna uma propriedade do objeto `buttonClasses` de acordo com o argumento recebido. Esse argumento é do sub-tipo `mode` que faz parte do tipo `ButtonType`, ou seja, apenas as opções "dark", "light" ou "disabled" são permitidas.
const getButtonClasses = (mode: ButtonType['mode']) => buttonClasses[mode];

/*
    Um componente de botão que possui 3 opções de estilos disponiveis e também aceita icones.

    @params {children} children - Tudo que for colocado dentro de Button será seu conteudo.
    @params {string} mode - O botão possui 3 modos: dark, light e disabled, cada um com um estilo diferente.
    @params {string} route - Rota que o botão deve acessar
    @params {function} onClick - função que vai ser chamada quando o botão for clicado.
    @params {component} Icon - Icone do botão.
*/
export const IconButton = ({ children, Icon, mode, onClick, href }: ButtonType) => {
    
    // Seleciona um conjunto de classes entre `dark`, `light` ou `disabled` baseado no valor da prop `mode`
    const buttonClass = getButtonClasses(mode);

    // Definindo os atributos HTML e eventos de acordo com as props recebidas
    const buttonProps = {
        href: mode !== 'disabled' ? href : undefined,
        onClick: mode !== 'disabled' ? onClick : undefined,
        className: `text-[10px] font-poppins flex flex-col items-center font-semibold ${buttonClass}`,
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