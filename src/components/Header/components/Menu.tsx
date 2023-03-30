"use client";

import { Accordion } from '@/components/Accordion';
import { MyContext } from '@/context/MyContext';
import { getGenres } from '@/services/http';
import { Genre } from '@/types/utils/genre';
import { removeRepeatGenre } from '@/utils';
import { useContext, useEffect, useState } from 'react';
import { HiX } from "react-icons/hi"
import { useQuery } from 'react-query';

export const Menu = () => {
    const { openMenu, setOpenMenu } = useContext(MyContext);
    const handleCloseMenu = () => setOpenMenu?.(false);

    const movie_genres = useQuery('movie_genres', () => getGenres('movie'));
    const serie_genres = useQuery('serie_genres', () => getGenres('tv'));
    
    const [allGenres, setAllGenres] = useState<Genre[]>([]);

    useEffect(() => {
        if(movie_genres.data && serie_genres.data){
            const concatGenres = removeRepeatGenre(movie_genres.data.genres.concat(serie_genres.data.genres));
            setAllGenres(concatGenres);
        }
    }, [movie_genres.isLoading, serie_genres.isLoading]);

    return(
        <div 
         className={`block h-screen w-full ${openMenu ? "transform-none" : "translate-y-[-100vh]"}
         duration-500 transition-transform bg-main-color md:hidden fixed top-0 left-0 z-[3000] overflow-auto p-3`}
        >
            <div className='flex justify-end w-full'>
                <button onClick={handleCloseMenu} className='opacity-80 hover:opacity-100 text-2xl'>
                    <HiX />
                </button>
            </div>
            <nav className='text-xl flex flex-col gap-3 px-3'>
                <span className="font-poppins font-bold uppercase border-b">
                    <a href="#">Filmes</a>
                </span>
                <span className="font-poppins font-bold uppercase border-b">
                    <a href="#">Series</a>
                </span>
                <span className="font-poppins font-bold uppercase border-b">
                    <a href="#">Minha Lista</a>
                </span>
                <Accordion title="Categorias">
                    <ul className="flex flex-wrap">
                        {allGenres && (
                            allGenres.map(genre => (
                                <li key={genre.id} className="block w-1/2">
                                    <a href="#" className="hover:underline">{genre.name}</a>
                                </li>
                            ))
                        )}
                    </ul>
                </Accordion>
            </nav>
        </div>
    )
}