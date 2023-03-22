"use client";

import { Accordion } from '@/components/Accordion';
import { MyContext } from '@/context/MyContext';
import { useContext } from 'react';
import { HiX } from "react-icons/hi"

export const Menu = () => {
    const { openMenu, setOpenMenu } = useContext(MyContext);
    const handleCloseMenu = () => setOpenMenu?.(false);

    return(
        <div 
         className={`block h-screen w-full ${openMenu ? "transform-none" : "translate-y-[-100vh]"}
         duration-500 transition-transform bg-black p-3 md:hidden fixed top-0 left-0 z-10`}>
            <div className='flex justify-end'>
                <button onClick={handleCloseMenu} className='opacity-80 hover:opacity-100 text-2xl'>
                    <HiX />
                </button>
            </div>
            <nav className='text-2xl flex flex-col gap-3'>
                <span className="font-poppins font-bold uppercase">
                    <a href="#">My List</a>
                </span>
                <span className="font-poppins font-bold uppercase">
                    <a href="#">Movies</a>
                </span>
                <span className="font-poppins font-bold uppercase">
                    <a href="#">Series</a>
                </span>
                <Accordion title='Categories'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, dicta inventore aut quae suscipit, ex consequuntur deserunt doloribus magnam blanditiis alias maiores nemo excepturi sapiente? Debitis distinctio quos fugit maxime.
                </Accordion>
            </nav>
        </div>
    )
}