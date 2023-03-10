"use client";

import { MyContext } from '@/context';
import { categories } from '@/utils/categories';
import { useContext } from 'react';
import { HiX } from "react-icons/hi"
import MenuItem from './MenuItem';

export default function Menu() {
    const { openMenu, setOpenMenu } = useContext(MyContext);
    
    const handleCloseMenu = () => setOpenMenu?.(false);

    return(
        <div 
         className={`block h-screen w-full fixed top-0 left-0 ${openMenu ? "transform-none" : "translate-y-[-100vh]"}
         duration-500 transition-transform bg-black p-3 md:hidden`}
        >
            <div className='flex justify-end'>
                <button onClick={handleCloseMenu}>
                    <HiX />
                </button>
            </div>
            <div className='text-2xl flex flex-col gap-3'>
                <MenuItem>
                    <a href="#">My List</a>
                </MenuItem>
                <MenuItem>
                    <a href="#">Movies</a>
                </MenuItem>
                <MenuItem>
                    <a href="#">Series</a>
                </MenuItem>
                <MenuItem>Categories</MenuItem>
            </div>
        </div>
    )
}