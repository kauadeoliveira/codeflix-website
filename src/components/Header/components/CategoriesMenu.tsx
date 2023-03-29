import { getGenres } from "@/services/http";
import { Genre } from "@/types/genre";
import { removeRepeatGenre } from "@/utils";
import { useState, useEffect } from "react";
import { useQuery } from "react-query";

export const CategoriesMenu = () => {
    const [openCategoriesMenu, setOpenCategoriesMenu] = useState(false);
    const handleOpenCategoriesMenu = () => setOpenCategoriesMenu(true);
    const handleCloseCategoriesMenu = () => setOpenCategoriesMenu(false);
 
    const movie_genres = useQuery('movie_genres', () => getGenres('movie'));
    const serie_genres = useQuery('serie_genres', () => getGenres('tv'));
    
    const [allGenres, setAllGenres] = useState<Genre[]>([]);

    useEffect(() => {
        if(movie_genres.data && serie_genres.data){
            const concatGenres = removeRepeatGenre(movie_genres.data.genres.concat(serie_genres.data.genres));
            setAllGenres(concatGenres);
        }
    }, [movie_genres.isLoading, serie_genres.isLoading]);

    useEffect(() => {
        document.addEventListener('mousedown', handleCloseCategoriesMenu);

        return () => document.removeEventListener('mousedown', handleCloseCategoriesMenu)
    }, [openCategoriesMenu])

    return(
        <div className="relative z-10">
            <button
            className="flex items-start h-9 px-2 opacity-80 hover:opacity-100 relative after:content-['']
            after:absolute after:bg-rose-500 after:h-[3px] after:w-0 after:transition-all after:duration-300
            after:left-0 after:bottom-0 hover:after:w-full font-poppins"
            onClick={handleOpenCategoriesMenu}
            >
                Categoria
            </button>
            <ul
             className={`h-60 bg-main-color absolute top-8 overflow-y-auto overflow-x-hidden text-sm text-center rounded-b-md
             ${openCategoriesMenu ? 'block' : 'hidden'}`}
              onMouseDown={handleCloseCategoriesMenu}
             >
                {allGenres.map((genre: Genre) => (
                    <li key={genre.id} className="p-1 hover:bg-secondary-color cursor-pointer">
                        <a href="#">{genre.name}</a>
                    </li>
                ))}
            </ul>
        </div>
    )
}