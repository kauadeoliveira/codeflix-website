"use client"

import { MyContext } from "@/context/MyContext"
import { useMovies, useWindowSize } from "@/hooks"
import { useContext } from "react"
import { HiX } from "react-icons/hi"
import { SearchBar } from "./components/SearchBar"
import { SearchItem } from "./components/SearchItem"


/* 
    Menu onde vai conter toda a parte de pesquisa de filmes ou series do site.

    OBS: utilizado só no tamanho mobile da janela.
*/
export const Search = () => {
    // Estado que indica se o menu está aberto ou fechado. Altero ele através de um botão que fica lá em <Header /> por isso usei context.
    const { openSearch, setOpenSearch } = useContext(MyContext);
    const { width } = useWindowSize();
    const { allMovies } = useMovies();

    const handleCloseSearch = () => setOpenSearch && setOpenSearch(false);

    return(
        <>
        {width && width > 768 ? (
            <div className={`hidden h-screen w-full ${openSearch ? "transform-none" : "translate-y-[-100vh]"}
            duration-500 transition-transform md:block backdrop-blur-sm fixed top-0 left-0 z-[3000]`}>
                <div className="bg-main-color">
                    <button onClick={handleCloseSearch} className='opacity-80 hover:opacity-100 text-2xl'>
                        <HiX />
                    </button>
                </div>
            </div>   
        ) : (

            <div className={`block h-screen w-full ${openSearch ? "transform-none" : "translate-y-[-100vh]"}
            duration-500 transition-transform bg-main-color p-3 md:hidden fixed top-0 left-0 z-[3000]`}>
                <div className='flex justify-end mb-4'>
                    <button onClick={handleCloseSearch} className='opacity-80 hover:opacity-100 text-2xl'>
                        <HiX />
                    </button>
                </div>
                <SearchBar />
                <div className="w-full mt-3">
                    <span className="text-xl">Resultados</span>
                    <div className="flex flex-col gap-2">
                        {allMovies.data && 
                        <SearchItem href="#"
                         img={allMovies.data[0].poster_path}
                         overview={allMovies.data[0].overview}
                         title={allMovies.data[0].title}
                         />}

                        {allMovies.data && 
                        <SearchItem href="#"
                         img={allMovies.data[9].poster_path}
                         overview={allMovies.data[9].overview}
                         title={allMovies.data[9].title}
                         />}
                    </div>
                </div>
            </div>
        )}
        </>
    )
}