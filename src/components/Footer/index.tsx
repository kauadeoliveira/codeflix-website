"use client";

import {HiChevronUp } from "react-icons/hi"
import { isBrowser } from "@/constants";

import { motion } from "framer-motion";
/* 
    - framer-motion é uma biblioteca de animações.
    - motion é um componente otimizado para animações de 60fps.
    - Há um motion para cada elemento HTML, por exemplo <motion.div>, <motion.button>, etc.
    - Eles funcionam exatamente como uma tag HTML comum, mas oferecem props que nos permite fazer animações
*/


// Componente Footer que estará presente em todas as páginas da aplicação
export const Footer = () => {

    // Função que ao ser chamada rola a página para o topo.
    const backToTop = () => {
        if(isBrowser()){
            window.scrollTo({top: 0, behavior: 'smooth'});
        }
    }

    return(
        <footer className="mt-32">
            <div className="flex w-10/12 border-t border-text-disabled m-auto p-4 justify-between">
                <div className="flex gap-4 text-text-disabled text-xs">
                    <p>© 2023 Codeflix, Inc.</p>
                    <ul className="flex gap-2">
                        <li className="hover:text-white hover:underline">
                            <a href="#" target="_blank">Linkedin</a>
                        </li>
                        <li className="hover:text-white hover:underline">
                            <a href="#" target="_blank">Github</a>
                        </li>
                        <li className="hover:text-white hover:underline">
                            <a href="#" target="_blank">Email</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <motion.button
                     className="bg-slate-50 text-black rounded-full text-xl hover:bg-slate-200"
                     onClick={backToTop}
                     title="Voltar ao topo da página"
                     whileHover={{ y: -3 }}
                     aria-label="Voltar ao topo da página"
                    >
                        <HiChevronUp />
                    </motion.button>
                </div>
            </div>
        </footer>
    )
}