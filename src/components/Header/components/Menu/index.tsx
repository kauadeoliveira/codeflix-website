"use client";

import { useContext, useEffect, useState } from 'react';
import { HiX } from "react-icons/hi"
import { MyContext } from '@/context/MyContext';
import { getGenres } from '@/services/http';
import { removeRepeatGenre } from '@/utils';
import { Accordion } from '@/components';
import { Genre } from '@/types/utils';
import { MenuItem } from './components/MenuItem';

// Esse componente usa a biblioteca react-query para fazer buscas a apis e gerenciar o estado de cache.
import { useQuery } from 'react-query';

/* 
    React Query é uma biblioteca de gerenciamento de estado em cache para React que ajuda a lidar com dados assíncronos. Ele fornece uma maneira fácil de buscar, armazenar em cache e atualizar dados, e também oferece recursos como refetching automático, cancelamento de solicitação e gerenciamento de cache inteligente.

    Importei o hook `useQuery` para fazer buscas a apis, ele facilita bastante esse trabalho. 
*/


/* 
    Menu que vai conter toda informação do nosso Header. Através dele vamos conseguir acessar diferentes rotas do site.
    Seu estado natural é fechado, mas ao clicarmos no `botão de Menu` ele abre.

    OBS: Usado apenas no modo Mobile da janela. 
*/

export const Menu = () => {
    // Estado que indica se o menu está aberto ou fechado. Altero ele através de um botão que fica lá em <Header /> por isso usei context.
    const { openMenu, setOpenMenu } = useContext(MyContext);

    // Altera o estado do menu para fechado.
    const handleCloseMenu = () => setOpenMenu?.(false);

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
                <MenuItem href="/filmes">Filmes</MenuItem>
                <MenuItem href="/series">Series</MenuItem>
                <MenuItem href="/minha-lista">Minha Lista</MenuItem>
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