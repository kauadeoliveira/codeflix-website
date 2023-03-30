import { getGenres } from "@/services/http";
import { Genre } from "@/types/genre";
import { removeRepeatGenre } from "@/utils";
import { useState, useEffect } from "react";
import { useQuery } from "react-query";

export const CategoriesMenu = () => {
    // Estado que indica se o menu está aberto ou fechado
    const [openCategoriesMenu, setOpenCategoriesMenu] = useState(false);

    // Altera o estado do menu para ABERTO
    const handleOpenCategoriesMenu = () => setOpenCategoriesMenu(true);

    // Altera o estado do menu para FECHADO
    const handleCloseCategoriesMenu = () => setOpenCategoriesMenu(false);
 
    // Nessas duas requests estou buscando todos os GENEROS de series e filmes disponiveis 
    const movie_genres = useQuery('movie_genres', () => getGenres('movie'));
    const serie_genres = useQuery('serie_genres', () => getGenres('tv'));
    
    // Nesse estado vou armazenar todos os generos de series e filmes juntos.
    const [allGenres, setAllGenres] = useState<Genre[]>([]);

    // Junta todos os generos recebido de filmes e series em um array só sem repetir nenhum valor
    useEffect(() => {
        if(movie_genres.data && serie_genres.data){
            const concatGenres = removeRepeatGenre(movie_genres.data.genres.concat(serie_genres.data.genres));
            setAllGenres(concatGenres);
        }
    }, [movie_genres.isLoading, serie_genres.isLoading]);

    
    /* Quando o menu estiver aberto quero poder fecha-lo clicando em qualquer lugar da tela.
    Portanto esse useEffect adiciona mousedown event diretamente em `document` quando o estado openCategoriesMenu for true */
    useEffect(() => {
        if(openCategoriesMenu){
            document.addEventListener('mousedown', handleCloseCategoriesMenu);
        }
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