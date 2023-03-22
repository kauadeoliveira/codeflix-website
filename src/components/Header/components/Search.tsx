"use client"

import { MyContext } from "@/context"
import { useContext } from "react"
import { HiX } from "react-icons/hi"

export const Search = () => {
    const { openSearch, setOpenSearch } = useContext(MyContext);
    const handleCloseSearch = () => setOpenSearch?.(false);

    return(
        <div className={`block h-screen w-full ${openSearch ? "transform-none" : "translate-y-[-100vh]"}
        duration-500 transition-transform bg-black p-3 md:hidden fixed top-0 left-0 z-10`}>
            <div className='flex justify-end'>
                <button onClick={handleCloseSearch} className='opacity-80 hover:opacity-100 text-2xl'>
                    <HiX />
                </button>
            </div>
        </div>
    )
}