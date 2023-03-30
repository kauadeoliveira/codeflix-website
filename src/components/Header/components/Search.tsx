"use client"

import { MyContext } from "@/context/MyContext"
import { useContext } from "react"
import { HiX } from "react-icons/hi"

/* 
    Menu onde vai conter toda a parte de pesquisa de filmes ou series do site.

    OBS: utilizado só no tamanho mobile da janela.
*/
export const Search = () => {
    // Estado que indica se o menu está aberto ou fechado. Altero ele através de um botão que fica lá em <Header /> por isso usei context.
    const { openSearch, setOpenSearch } = useContext(MyContext);

    // Altera o estado do menu para fechado.
    const handleCloseSearch = () => setOpenSearch?.(false);

    return(
        <div className={`block h-screen w-full ${openSearch ? "transform-none" : "translate-y-[-100vh]"}
        duration-500 transition-transform bg-main-color p-3 md:hidden fixed top-0 left-0 z-[3000]`}>
            <div className='flex justify-end'>
                <button onClick={handleCloseSearch} className='opacity-80 hover:opacity-100 text-2xl'>
                    <HiX />
                </button>
            </div>
        </div>
    )
}