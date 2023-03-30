"use client";

import { HiMenu, HiSearch } from "react-icons/hi";
import { useContext } from 'react'
import { MyContext } from "@/context/MyContext";
import { Menu, Search, CategoriesMenu } from "./components";

/* Header do site */
export const Header = () => {
/*
    Dois sets de estados:
    - setOpenMenu define se o Menu vai estar aberto ou fechado.
    - setOpenSearch define se o Search vai estar aberto ou fechado.
*/
    const { setOpenMenu, setOpenSearch } = useContext(MyContext);

    // Altera o estado do Menu de fechado para aberto.
    const handleOpenMenu = () => setOpenMenu?.(true);

    // Altera o estado de Search de fechado para aberto.
    const handleOpenSearch = () => setOpenSearch?.(true);

    return(
        <>
            <header className='w-full h-[52px] flex justify-between text-2xl py-1 px-4 md:px-6 md:py-2'>
                <button onClick={handleOpenMenu} className='block md:hidden'>
                    <HiMenu />
                </button>
                <a href="/" className='font-berkshire text-2xl md:text-3xl text-rose-500'>
                    Codeflix
                </a>
                <nav className='hidden md:flex gap-10 text-lg'>
                    <a
                     href="#"
                     className="px-2 opacity-80 hover:opacity-100 relative after:content-['']
                     after:absolute after:bg-rose-500 after:h-[3px] after:w-0 after:transition-all after:duration-300
                     after:left-0 after:bottom-0 hover:after:w-full font-poppins"
                    >
                        Filmes
                    </a>
                    <a
                     href="#"
                     className="px-2 opacity-80 hover:opacity-100 relative after:content-['']
                     after:absolute after:bg-rose-500 after:h-[3px] after:w-0 after:transition-all after:duration-300
                     after:left-0 after:bottom-0 hover:after:w-full font-poppins"
                    >
                        Series
                    </a>
                    <a
                     href="#"
                     className="px-2 opacity-80 hover:opacity-100 relative after:content-['']
                     after:absolute after:bg-rose-500 after:h-[3px] after:w-0 after:transition-all after:duration-300
                     after:left-0 after:bottom-0 hover:after:w-full font-poppins"
                    >
                        Minha Lista
                    </a>
                    {/* Menu que lista todos os generos disponiveis. (DESKTOP) */}
                    <CategoriesMenu />
                </nav>
                <button onClick={handleOpenSearch}>
                    <HiSearch />
                </button>
            </header>

            {/* Menu que vai conter toda informação do nosso Header (MOBILE, TABLET) */}
            <Menu />

            {/* Menu onde vai conter toda a parte de pesquisa de filmes ou series do site. */}
            <Search />
        </>
    )
} 