import Image from "next/image";
import { VideoCardType } from "./types";

import { motion } from "framer-motion"
/* 
    - framer-motion é uma biblioteca de animações.
    - motion é um componente otimizado para animações de 60fps.
    - Há um motion para cada elemento HTML, por exemplo <motion.div>, <motion.button>, etc.
    - Eles funcionam exatamente como uma tag HTML comum, mas oferecem props que nos permite fazer animações
*/


/* 
    O componente VideoCard é um componente usado para exibir cada filme/serie do Site.

    @params {string} title - Titulo do filme, será usado para identificar a `alt` da imagem.
    @params {string} img - Imagem da capa do filme.
    @params {string} route - rota direcionará o usuario ao clicar no VideoCard. 
*/
export const VideoCard = ({ title, img, route }: VideoCardType) => {
    return(
        <motion.a href={route} className="block min-w-[120px] w-[120px] h-[180px] bg-secondary-color rounded-lg">
            <Image
             className="rounded-lg w-full h-full"
             src={`https://image.tmdb.org/t/p/original${img}`}
             alt={`${title} poster`}
             width={180}
             height={270}
            />
        </motion.a>
    )
}