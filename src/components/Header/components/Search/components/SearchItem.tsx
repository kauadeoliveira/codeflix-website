import { Movie } from "@/types/utils"
import Image from "next/image";

type SearchItem = {
    img: string;
    title: string;
    overview: string;
    href: string;
}

export const SearchItem = ({ img, title, overview, href }: SearchItem) => {
    return(
        <a 
         className="w-full flex rounded-lg shadow-md bg-secondary-color transition-colors duration-100 hover:bg-bg-disabled"
         href={href}
        >
            <Image
             src={`https://image.tmdb.org/t/p/original${img}`}
             width={80} height={120} className="rounded-l-lg"
             alt={`Poster de: ${title}`}
            />
            <div className="flex flex-col p-2 break-all">
                <span className="font-bold text-lg">
                    {title}
                </span>
                <p className="text-xs font-poppins">
                    {overview.length > 120 ? overview.slice(0, 120) : overview}...
                </p>
            </div>
        </a>
    )
}