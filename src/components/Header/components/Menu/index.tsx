"use client";

import { useContext } from 'react';
import { HiX } from "react-icons/hi"
import { MyContext } from '@/context/MyContext';
import { Accordion } from '@/components';
import { MenuItem } from './components/MenuItem';
import { useGenres } from '@/hooks/useGenres';


/* 
    Menu que vai conter toda informação do nosso Header. Através dele vamos conseguir acessar diferentes rotas do site.
    Seu estado natural é fechado, mas ao clicarmos no `botão de Menu` ele abre.

    OBS: Usado apenas no modo Mobile da janela. 
*/
export const Menu = () => {
    // Estado que indica se o menu está aberto ou fechado.
    const { openMenu, setOpenMenu } = useContext(MyContext);

    const handleCloseMenu = () => setOpenMenu && setOpenMenu(false);

    // Acessa os generos dos filmes e series através desse hook
    const { data: genres } = useGenres()

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
                        {genres.allGenres.map(genre => (
                            <li key={genre.id} className="block w-1/2">
                                <a href="#" className="hover:underline">{genre.name}</a>
                            </li>
                        ))}
                    </ul>
                </Accordion>
            </nav>
        </div>
    )
}