import { useWindowSize } from "@/hooks"
import { Button } from "../Button";
import { HiPlay, HiDotsCircleHorizontal } from "react-icons/hi"
import { PosterProps } from "./types";
import { useEffect } from "react";

export const Poster = ({ title, overview, images, route }: PosterProps) => {
    const { width } = useWindowSize();
    return(
        <div className={`relative w-full bg-main-color min-h-[550px]`}>
            {/* Backdrop effect */}
           <div 
             className={`bg-main-color opacity-75 w-full h-full absolute top-0 left-0
             ${width && width >= 768 ? 'block' : 'hidden'}`} 
            />

           {/* Titulo e descrição do filme que só aparecerá quando a largura da janela for superior a 768px */}
           <div
             className={`absolute w-1/2 top-1/3 left-4 font-poppins flex flex-col gap-3
             ${width && width >= 768 ? 'flex' : 'hidden'}`}
            >
                <h2 className={`font-bold ${width && width > 1024 ? 'text-5xl' : 'text-3xl'}`}>
                    {title}
                </h2>
                <p className={`opacity-90 ${width && width > 1024 ? 'text-base' : 'text-sm'}`}>
                    {overview}
                </p>
                <div className="flex gap-2">
                    <Button mode="light" Icon={HiPlay}>Trailer</Button>
                    <Button mode="dark" route={route} Icon={HiDotsCircleHorizontal}>Saiba Mais</Button>
                </div>
           </div>

           {/* A imagem do poster vai ser selecionada de acordo com a largura da janela */}
            <div className="bg-main-color">
                <picture> 
                    <source srcSet={`https://image.tmdb.org/t/p/w1920_and_h800_multi_faces${images.lg}`} media={"(min-width: 1024px)"}/>
                    <source srcSet={`https://image.tmdb.org/t/p/original${images.lg}`} media={"(min-width: 768px)"}/>
                    <img src={`https://image.tmdb.org/t/p/original/${images.sm}`} alt={`${title} Poster`} />
                </picture>
            </div>

            <div className={`w-full absolute bottom-3 gap-3 justify-center ${width && width < 768 ? 'flex' : 'hidden'}`}>
                <Button mode="light" Icon={HiPlay}>Trailer</Button>
                <Button mode="dark" route={route} Icon={HiDotsCircleHorizontal}>Saiba Mais</Button>
            </div>
        </div>
    )
}