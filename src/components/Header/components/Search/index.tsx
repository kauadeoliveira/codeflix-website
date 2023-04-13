"use client"

import { MyContext } from "@/context/MyContext"
import { useMovies, useSeries } from "@/hooks"
import React, { ChangeEvent, useContext, useEffect, useRef, useState } from "react"
import { HiX } from "react-icons/hi"
import { SearchBar } from "./components/SearchBar"
import { SearchItem } from "./components/SearchItem"
import { Movie, Serie } from "@/types/utils"
import { usePathname } from "next/navigation"


export const Search = () => {
    const { allMovies } = useMovies();
    const { allSeries } = useSeries();
    const { openSearch, setOpenSearch } = useContext(MyContext);

    const searchInputRef = useRef<HTMLInputElement>(null)
    const [searchValue, setSearchValue] = useState<string>('');
    const [results, setResults] = useState<(Movie | Serie)[] | undefined>(undefined);

    const handleCloseSearch = () => setOpenSearch && setOpenSearch(false);

    const handleSearchValue = (event: ChangeEvent<HTMLInputElement>) => setSearchValue(event.target.value.toLowerCase().trim())

    useEffect(() =>  {
        if(searchValue.length > 0){
            const movieResults: Movie[] = allMovies.data?.filter(movie => movie.title.toLowerCase().includes(searchValue)) ?? []
            const serieResults: Serie[] = allSeries.data?.filter(serie => serie.name.toLowerCase().includes(searchValue)) ?? []
            
            setResults([...movieResults, ...serieResults])
        }else{
            setResults([])
        }
    }, [searchValue])

    // Reset
    useEffect(() => {
        if(searchInputRef.current){
            searchInputRef.current.value = ''
        }
        setResults([])
        setSearchValue('')
    }, [openSearch])

    
    const pathname = usePathname()
    useEffect(() => handleCloseSearch(), [pathname])
    
    return(
        <div className={`block bg-main-color h-screen w-full p-3 ${openSearch ? "transform-none" : "translate-y-[-100vh]"}
        duration-500 transition-transform fixed top-0 left-0 z-[3000] overflow-auto`}>
            <div className='flex justify-end mb-2'>
                <button onClick={handleCloseSearch} className='opacity-80 hover:opacity-100 text-2xl'>
                    <HiX />
                </button>
            </div>
            <SearchBar onChange={handleSearchValue} ref={searchInputRef} />
            <div className="w-full mt-3">
                <span className={`text-xl ${searchValue ? 'inline-block' : 'hidden'}`}>
                    {results && results.length > 0 ? 'Resultados' : 'Que pena...Não temos essa opção.'}
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
    )
}