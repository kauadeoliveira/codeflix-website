import { Movie } from "@/types/utils"
import Image from "next/image";
import { HiStar } from "react-icons/hi"

type SearchItem = {
    img: string;
    title: string;
    date: string;
    rating: number
    href: string;
}

export const SearchItem = ({ img, title, date, href, rating }: SearchItem) => {
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
                <span className="text-gray-400">{date && date.split('-')[0]}</span>
                <span className="flex items-center gap-[2px]">
                    {rating}
                    <HiStar className="text-yellow-400"/>
                </span>
            </div>
        </a>
    )
}