import { useWindowSize } from '@/hooks';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { SliderProps } from './types';

/* 
    O componente Slider é usado para exibir uma lista de itens em um carrossel horizontal.
    Ele usa o react-multi-carousel para implementar o carrossel.

    @params {children} children - Itens que serão exibidos no carrosel.
    @params {string} title - Titulo que será exibido na parte superior do carrosel. 
*/
export const Slider = ({ children, title }: SliderProps) => {
    // width é uma propriedade do meu hook `useWindowSize` que retorna o valor da largura atual da janela
    const { width } = useWindowSize();

    /* 
        Como o próprio nome já diz `responsive` é um objeto onde farei as configurações de responsividade do meu Carrosel.
        Tenho varias propriedades dentro dele, cada uma indica um comportamento diferente pro meu Carrosel baseado na largura atual da janela.
    */
    const responsive = {
        mobile_sm: {
            breakpoint: { max: 425, min: 0 },
            items: 3,
            partialVisibilityGutter: 30
        },
        mobile_lg: {
            breakpoint: { max: 550, min: 426 },
            items: 3.5,
            partialVisibilityGutter: 30
        },
        tablet_sm: {
            breakpoint: { max: 650, min: 551 },
            items: 4.5,
            partialVisibilityGutter: 30
        },
        tablet_lg: {
            breakpoint: { max: 950, min: 651 },
            items: 5.5,
            partialVisibilityGutter: 30
        },
        desktop_sm: {
            breakpoint: { max: 1200, min: 950 },
            items: 8.5,
            partialVisibilityGutter: 30
        },
        desktop_lg: {
            breakpoint: { max: 3000, min: 1201 },
            items: 9.5,
            partialVisibilityGutter: 30
        }
      }

    return(
        <div className="p-3">
            <h2 className="text-xl font-bold mb-2 ml-1 capitalize font-poppins">{title}</h2>
            <Carousel
             responsive={responsive}
             infinite
             slidesToSlide={width && width > 950 ? 7 : width && width > 550 ? 3 : 2}
             ssr
             swipeable
            >
                {children}
            </Carousel>
        </div>
    )
}