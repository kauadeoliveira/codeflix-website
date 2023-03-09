"use client";


import { HiOutlineMenu, HiOutlineSearch } from "react-icons/hi";
import { useContext } from 'react'
import { MyContext } from "@/context";


export default function Header() {
    const { openMenu, setOpenMenu } = useContext(MyContext);
    const handleOpenMenu = () => setOpenMenu?.(true);

    return(
        <header className="flex justify-between items-center text-white text-2xl py-1 px-4">
            <button onClick={handleOpenMenu}>
                <HiOutlineMenu />
            </button>
            <a href="/" className="font-caveat">
                Codeflix
            </a>
            <button>
                <HiOutlineSearch />
            </button>
        </header>
    )
} 