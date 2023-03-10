"use client";

import { MyContext } from '@/context';
import { useContext } from 'react';
import { HiX } from "react-icons/hi"
import Accordion from './Accordion';
import MenuItem from './MenuItem';


export default function Menu() {
    const { openMenu, setOpenMenu } = useContext(MyContext);
    const handleCloseMenu = () => setOpenMenu?.(false);

    return(
        <div 
         className={`block h-screen w-full ${openMenu ? "transform-none" : "translate-y-[-100vh]"}
         duration-500 transition-transform bg-black p-3 md:hidden fixed top-0 left-0`}>
            <div className='flex justify-end'>
                <button onClick={handleCloseMenu} className='opacity-80 hover:opacity-100'>
                    <HiX />
                </button>
            </div>
            <nav className='text-2xl flex flex-col gap-3'>
                <MenuItem>
                    <a href="#">My List</a>
                </MenuItem>
                <MenuItem>
                    <a href="#">Movies</a>
                </MenuItem>
                <MenuItem>
                    <a href="#">Series</a>
                </MenuItem>
                <Accordion title='Categories'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, dicta inventore aut quae suscipit, ex consequuntur deserunt doloribus magnam blanditiis alias maiores nemo excepturi sapiente? Debitis distinctio quos fugit maxime.
                </Accordion>
            </nav>
        </div>
    )
}