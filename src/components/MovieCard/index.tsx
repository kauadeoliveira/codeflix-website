import { motion } from "framer-motion"
import Image from "next/image";

type MovieCardType = {
    title: string;
    img: string;
    route: string;
}

export const MovieCard = ({ title, img, route }: MovieCardType) => {
    return(
        <motion.a href={route} className="block min-w-[180px] w-[180px] h-[270px] bg-red-500 rounded-lg">
            {/* <Image
             className="rounded-lg"
             src={`https://image.tmdb.org/t/p/w200${img}`}
             alt={`${title} poster`}
             width={180}
             height={270}
            /> */}
            .
        </motion.a>
    )
}