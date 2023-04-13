"use client";

import { useContext, useEffect } from 'react';
import { HiX } from "react-icons/hi"
import { MyContext } from '@/context/MyContext';
import { Accordion } from '@/components';
import { MenuItem } from './components/MenuItem';
import { useGenres } from '@/hooks/useGenres';
import { usePathname } from "next/navigation"
import { useWindowSize } from '@/hooks';

/* 
    Menu que vai conter toda informação do nosso Header. Através dele vamos conseguir acessar diferentes rotas do site.
    Seu estado natural é fechado, mas ao clicarmos no `botão de Menu` ele abre.

    OBS: Usado apenas no modo Mobile da janela. 
*/
export const Menu = () => {
    const { width } = useWindowSize()

    // Estado que indica se o menu está aberto ou fechado.
    const { openMenu, setOpenMenu } = useContext(MyContext);

    const handleCloseMenu = () => setOpenMenu && setOpenMenu(false);

    // Acessa os generos dos filmes e series através desse hook
    const { allGenres } = useGenres()

    const pathname = usePathname()

    useEffect(() => handleCloseMenu(), [pathname])

    useEffect(() => {
        if(width && width > 768 && openMenu && setOpenMenu){
            setOpenMenu(false);
        }
    }, [width])

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
                <MenuItem href="/">Inicio</MenuItem>
                <MenuItem href="/filmes">Filmes</MenuItem>
                <MenuItem href="/series">Series</MenuItem>
                <MenuItem href="/minha-lista">Minha Lista</MenuItem>
                <Accordion title="Categorias">
                    <ul className="flex flex-wrap">
                        {allGenres.data.map(genre => (
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