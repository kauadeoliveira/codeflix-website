import { motion } from "framer-motion"
import Image from "next/image";
import { VideoCardType } from "./types";

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