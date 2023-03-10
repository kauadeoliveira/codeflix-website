"use client";

import { HiMenu, HiSearch } from "react-icons/hi";
import { useContext, useEffect } from 'react'
import { MyContext } from "@/context";
import NavigationItem from "./NavigationItem";
import Menu from "./Menu";
import Search from "./Search";


export default function Header() {
    const { setOpenMenu, setOpenSearch } = useContext(MyContext);

    const handleOpenMenu = () => setOpenMenu?.(true);
    const handleOpenSearch = () => setOpenSearch?.(true);

    return(
        <>
            <header className='w-full flex justify-between sm:text-2xl md:text-lg py-1 px-4 md:px-6 md:py-2 fixed top-0 left-0'>
                <button onClick={handleOpenMenu} className='block md:hidden'>
                    <HiMenu />
                </button>
                <a href="/" className='font-caveat text-2xl md:text-4xl'>Codeflix</a>
                <nav className='hidden md:flex gap-10'>
                    <NavigationItem route="#">Movies</NavigationItem>
                    <NavigationItem route="#">Series</NavigationItem>
                    <NavigationItem route="#">My List</NavigationItem>
                    <NavigationItem route="#">Category</NavigationItem>
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