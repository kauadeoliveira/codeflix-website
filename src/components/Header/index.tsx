"use client";

import { HiMenu, HiSearch } from "react-icons/hi";
import { useContext } from 'react'
import { MyContext } from "@/context/MyContext";
import { Menu } from "./components/Menu";
import { Search } from "./components/Search";



export const Header = () => {
    const { setOpenMenu, setOpenSearch } = useContext(MyContext);

    const handleOpenMenu = () => setOpenMenu?.(true);
    const handleOpenSearch = () => setOpenSearch?.(true);

    return(
        <>
            <header className='w-full flex justify-between text-2xl py-1 px-4 md:px-6 md:py-2 fixed top-0 left-0 z-10'>
                <button onClick={handleOpenMenu} className='block md:hidden'>
                    <HiMenu />
                </button>
                <a href="/" className='font-berkshire text-2xl md:text-3xl'>Codeflix</a>
                <nav className='hidden md:flex gap-10 text-lg'>
                    <a
                     href="#"
                     className="px-2 opacity-80 hover:opacity-100 relative after:content-['']
                     after:absolute after:bg-rose-500 after:h-[3px] after:w-0 after:transition-all after:duration-300
                     after:left-0 after:bottom-0 hover:after:w-full font-poppins"
                    >
                        Movies
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
                        My List
                    </a>
                    <a
                     href="#"
                     className="px-2 opacity-80 hover:opacity-100 relative after:content-['']
                     after:absolute after:bg-rose-500 after:h-[3px] after:w-0 after:transition-all after:duration-300
                     after:left-0 after:bottom-0 hover:after:w-full font-poppins"
                    >
                        Category
                    </a>
                </nav>
                <button onClick={handleOpenSearch}>
                    <HiSearch />
                </button>
            </header>
            <Menu />
            <Search />
        </>
    )
} 