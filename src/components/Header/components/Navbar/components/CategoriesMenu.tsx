import { useState, useEffect } from "react";
import type { Genre } from "@/types/utils/genre";
import { useGenres } from "@/hooks";


/* 
    Um menu que abre ao clicar em "Categories" e fecha quando clicamos em qualquer lugar da página.
    Dentro dele vamos listar todos os generos de series e filmes disponiveis.

    OBS: Utilizado apenas no modo tablet e desktop da janela
*/
export const CategoriesMenu = () => {
    // Estado que indica se o menu está aberto ou fechado
    const [openCategoriesMenu, setOpenCategoriesMenu] = useState(false);

    // Altera o estado do menu para ABERTO
    const handleOpenCategoriesMenu = () => setOpenCategoriesMenu(true);

    // Altera o estado do menu para FECHADO
    const handleCloseCategoriesMenu = () => setOpenCategoriesMenu(false);

    // Acessa os generos dos filmes e series através desse hook
    const { data: genres } = useGenres();
    
    // Adiciona mousedown event diretamente em `document` quando o estado openCategoriesMenu for true
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
                {genres.allGenres.map((genre: Genre) => (
                    <li key={genre.id} className="p-1 hover:bg-secondary-color cursor-pointer">
                        <a href="#">{genre.name}</a>
                    </li>
                ))}
            </ul>
        </div>
    )
}