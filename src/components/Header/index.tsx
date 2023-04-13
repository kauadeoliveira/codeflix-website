"use client";

import { HiMenu, HiSearch } from "react-icons/hi";
import { useContext, useEffect } from 'react'
import { MyContext } from "@/context/MyContext";
import { Logo } from "../../components"
import { Menu } from "./components/Menu";
import { Search } from "./components/Search";
import { Navbar } from "./components/Navbar";
import { useWindowSize } from "@/hooks";

/* Header do site */
export const Header = () => {
/*
    Dois sets de estados:
    - setOpenMenu define se o Menu vai estar aberto ou fechado.
    - setOpenSearch define se o Search vai estar aberto ou fechado.
*/
    const { setOpenMenu, setOpenSearch, openSearch, openMenu } = useContext(MyContext);

    const handleOpenMenu = () => setOpenMenu && setOpenMenu(true);

    const handleOpenSearch = () => setOpenSearch && setOpenSearch(true);


    useEffect(() => {
        if(openMenu || openSearch){
            document.body.style.overflow = "hidden"
        }else{
            document.body.style.overflow = "auto"
        }
    }, [openMenu, openSearch])

    return(
    <>
        <header className='w-full flex justify-between text-2xl py-1 px-4 md:px-6 md:py-2 z-10'>
            <button onClick={handleOpenMenu} className='block md:hidden'>
                <HiMenu />
            </button>
            <Logo />
            <Navbar />
            <button onClick={handleOpenSearch}>
                <HiSearch />
            </button>
        </header>
        {/* Menu que vai conter toda informação do nosso Header (Tablet, Desktop) */}
        <Menu />

        {/* Menu onde vai conter toda a parte de pesquisa de filmes ou series do site. */}
        <Search />
    </>
    )
} 