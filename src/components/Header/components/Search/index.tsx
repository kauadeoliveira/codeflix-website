"use client"

import { MyContext } from "@/context/MyContext"
import { useMovies, useSeries, useWindowSize } from "@/hooks"
import { ChangeEvent, useContext, useEffect, useState } from "react"
import { HiX } from "react-icons/hi"
import { SearchBar } from "./components/SearchBar"
import { SearchItem } from "./components/SearchItem"
import { Movie, Serie } from "@/types/utils"


/* 
    Menu onde vai conter toda a parte de pesquisa de filmes ou series do site.

    OBS: utilizado só no tamanho mobile da janela.
*/
export const Search = () => {
    // Estado que indica se o menu está aberto ou fechado. Altero ele através de um botão que fica lá em <Header /> por isso usei context.
    const { width } = useWindowSize();
    const { allMovies } = useMovies();
    const { allSeries } = useSeries();
    const allVideos: (Movie | Serie)[] | undefined = allMovies.data && allSeries.data && [...allMovies.data, ...allSeries.data]

    const { openSearch, setOpenSearch } = useContext(MyContext);
    const [searchValue, setSearchValue] = useState<string>('');
    const [results, setResults] = useState<(Movie | Serie)[] | undefined>(undefined);

    const handleCloseSearch = () => setOpenSearch && setOpenSearch(false);

    // const handleSearchValue = (event: ChangeEvent<HTMLInputElement>) => setSearchValue(event.target.value.trim())

    const getSearchResults = (searchQuery: string) => {
        if(searchQuery.length > 0){
            const movieResults: Movie[] = allMovies.data?.filter(movie => movie.title.toLowerCase().includes(searchQuery)) ?? []
            const serieResults: Serie[] = allSeries.data?.filter(serie => serie.name.toLowerCase().includes(searchQuery)) ?? []
            
            return [...movieResults, ...serieResults]
        }else{
            return []
        }

    }

    useEffect(() => {
        console.log(searchValue.length > 0)
        setResults(getSearchResults(searchValue))
    }, [searchValue])

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
            duration-500 transition-transform bg-main-color p-3 md:hidden fixed top-0 left-0 z-[3000] overflow-auto`}>
                <div className='flex justify-end mb-4'>
                    <button onClick={handleCloseSearch} className='opacity-80 hover:opacity-100 text-2xl'>
                        <HiX />
                    </button>
                </div>
                <SearchBar onChange={(event: ChangeEvent<HTMLInputElement>) => setSearchValue(event.target.value.trim())}/>
                    <div className="w-full mt-3">
                    <span className={`text-xl ${searchValue ? 'inline-block' : 'hidden'}`}>
                        {results && results.length > 0 ? 'Resultados' : 'Não encontrei'}
                    </span>
                        <div className="flex flex-col gap-2">
                            {results && results.map(result => (
                                <SearchItem 
                                key={result.id}
                                href="#"
                                img={result.poster_path}
                                overview={result.overview}
                                title={result.title ? result.title : result.name}
                                />
                            ))}
                        </div>
                    </div>
            </div>
        )}
        </>
    )
}