"use client";

import { HiOutlineMenu, HiOutlineSearch } from "react-icons/hi";
import { useContext } from 'react'
import { MyContext } from "@/context";
import NavigationItem from "./NavigationItem";
import Menu from "./Menu";


export default function Header() {
    const { openMenu, setOpenMenu } = useContext(MyContext);
    const handleOpenMenu = () => setOpenMenu?.(true);

    const navigationItems = []

    return(
        <>
            <header className='w-full flex justify-between sm:text-2xl md:text-lg py-1 px-4 md:px-6 md:py-2 fixed top-0 left-0'>
                <button onClick={handleOpenMenu} className='block md:hidden'>
                    <HiOutlineMenu />
                </button>
                <a href="/" className='font-caveat text-2xl md:text-4xl'>Codeflix</a>
                <nav className='hidden md:flex gap-10'>
                    <NavigationItem route="#">Movies</NavigationItem>
                    <NavigationItem route="#">Series</NavigationItem>
                    <NavigationItem route="#">My List</NavigationItem>
                    <NavigationItem route="#">Category</NavigationItem>
                </nav>
                <button>
                    <HiOutlineSearch />
                </button>
            </header>
            <Menu />
        </>
    )
} 