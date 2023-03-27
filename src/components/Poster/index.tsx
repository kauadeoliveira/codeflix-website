import { useWindowSize } from "@/hooks"
import { Button } from "../Button";
import { HiPlay, HiDotsCircleHorizontal } from "react-icons/hi"

type PosterProps = {
    title: string;
    overview: string;
    images: {
        lg: string;
        md: string;
        sm: string;
    };
    route: string;
}

export const Poster = ({ title, overview, images, route }: PosterProps) => {
    const { width } = useWindowSize();
    return(
        <div className="relative">
            {/* Backdrop effect */}
           <div className="bg-main-color opacity-75 w-full h-full absolute top-0 left-0" />

           {/* Titulo e descrição do filme que só aparecerá quando a largura da janela for superior a 768px */}
           <div
             className={`
             absolute w-1/2 top-1/3 left-4 font-poppins flex flex-col gap-3
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
            <div>
                <picture>
                    <source srcSet={images.lg} media={"(min-width: 1024px)"}/>
                    <source srcSet={images.md} media={"(min-width: 768px)"}/>
                    <img src={images.sm} alt={`${title} Poster`} />
                </picture>
            </div>
        </div>
    )
}