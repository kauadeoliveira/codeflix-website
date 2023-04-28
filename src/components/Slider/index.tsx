import { useWindowSize } from '@/hooks';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { SliderProps } from './types';
import { ProductionCard } from '../ProductionCard';

/* 
    O componente Slider é usado para exibir uma lista de itens em um carrossel horizontal.
    Ele usa o react-multi-carousel para implementar o carrossel.

    @params {children} children - Itens que serão exibidos no carrosel.
    @params {string} title - Titulo que será exibido na parte superior do carrosel. 
*/
export const Slider = ({ productions, title }: SliderProps) => {
    // width é uma propriedade do meu hook `useWindowSize` que retorna o valor da largura atual da janela
    const { width } = useWindowSize();

    /* 
        Como o próprio nome já diz `responsive` é um objeto onde farei as configurações de responsividade do meu Carrosel.
        Tenho varias propriedades dentro dele, cada uma indica um comportamento diferente pro meu Carrosel baseado na largura atual da janela.
    */
    const responsive = {
        mobile_sm: {
            breakpoint: { max: 425, min: 0 },
            items: 2.5,
            slidesToSlide: 2,
        },
        mobile_lg: {
            breakpoint: { max: 550, min: 426 },
            items: 3,
            slidesToSlide: 2.5
        },
        tablet_sm: {
            breakpoint: { max: 650, min: 551 },
            items: 4,
            slidesToSlide: 3.5  
        },
        tablet_lg: {
            breakpoint: { max: 950, min: 651 },
            items: 5,
            slidesToSlide: 4.5
        },
        desktop_sm: {
            breakpoint: { max: 1200, min: 950 },
            items: 7,
            slidesToSlide: 6.5
        },
        desktop_lg: {
            breakpoint: { max: 3000, min: 1201 },
            items: 9.5,
            slidesToSlide: 9
        }
      }


    return(
        <div className="p-4">
            <h2 className="text-xl font-bold mb-2 ml-1 capitalize font-poppins">{title}</h2>
            <Carousel
             responsive={responsive}
             infinite
             ssr
             swipeable
            >
          {productions.map(prod => (
            <div className="mx-2" key={prod.id}>
              <ProductionCard
               img={prod.poster_path}
               route={'title' in prod ? `/movie/${prod.id}` : `/tvserie/${prod.id}`}
               title={'title' in prod ? prod.title : prod.name ?? ''}
              />
            </div>
          ))}
            </Carousel>
        </div>
    )
}