import { Button } from "../Button";
import { HiPlay, HiDotsCircleHorizontal } from "react-icons/hi"
import { PosterProps } from "./types";

/* 
    Componente de Poster que ficará no topo de quase todas as páginas da aplicação. Ele receberá algumas caracteristicas de um filme ou serie.

    @params {string} title - Titulo da serie/filme que será mostrado bem grande no Poster.
    @params {string} overview - Sinopse da Serie/filme que será mostrado no Poster.
    @params {objeto} images - Um objeto que contém 2 propriedades `lg` e `sm`:
        - lg: recebe uma imagem grande para ser usada quando o tamanho da janela for superior a 768px
        - sm: recebe uma imagem pequena para ser usada quando o tamanho da janela for inferior a 768px
    @params {string} route - Rota do filme que está no Poster.
*/
export const Poster = ({ title, overview, images, route }: PosterProps) => (
    <div className="relative w-full bg-main-color sm:min-h-[700px] md:min-h-[400px] lg:min-h-[450px]">

        {/* Backdrop effect */}
        <div className="hidden md:block bg-main-color opacity-75 w-full h-full absolute top-0 left-0" />

        {/* Titulo e descrição do filme (Tablet, Desktop)*/}
        <div className="absolute w-1/2 top-1/3 left-4 font-poppins hidden md:flex flex-col gap-3">
            <h2 className="font-bold text-3xl lg:text-5xl">
                {title}
            </h2>
            <p className="opacity-90 text-base lg:text-sm">
                {overview}
            </p>
            <div className="flex gap-2">
                <Button mode="light" Icon={HiPlay}>Trailer</Button>
                <Button mode="dark" href={route} Icon={HiDotsCircleHorizontal}>Saiba Mais</Button>
            </div>
        </div>

        {/* A imagem do poster vai ser selecionada de acordo com a largura da janela */}
        <picture> 
            <source srcSet={`https://image.tmdb.org/t/p/w1920_and_h800_multi_faces${images.lg}`} media={"(min-width: 1024px)"}/>
            <source srcSet={`https://image.tmdb.org/t/p/original${images.lg}`} media={"(min-width: 768px)"}/>
            <img src={`https://image.tmdb.org/t/p/original/${images.sm}`} alt={`${title} Poster`} />
        </picture>

        {/* Botoes de `Trailer` e `Saiba Mais` (Mobile) */}
        <div className="w-full absolute bottom-3 flex md:hidden gap-3 justify-center">
            <Button mode="light" Icon={HiPlay}>Trailer</Button>
            <Button mode="dark" href={route} Icon={HiDotsCircleHorizontal}>Saiba Mais</Button>
        </div>
    </div>
)
