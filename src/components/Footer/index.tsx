"use client";

import {HiChevronUp } from "react-icons/hi"
import { isBrowser } from "@/constants";
import { motion } from "framer-motion";

export const Footer = () => {

    const backToTop = () => {
        if(isBrowser()){
            window.scrollTo({top: 0, behavior: 'smooth'});
        }
    }

    return(
        <footer>
            <div className="flex w-10/12 border-t border-text-disabled m-auto p-4 justify-between">
                <div className="flex gap-4 text-text-disabled text-xs">
                    <p>© 2023 Codeflix, Inc.</p>
                    <ul className="flex gap-2">
                        <li className="hover:text-white hover:underline">
                            <a href="#">Linkedin</a>
                        </li>
                        <li className="hover:text-white hover:underline">
                            <a href="#">Github</a>
                        </li>
                        <li className="hover:text-white hover:underline">
                            <a href="#">Email</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <motion.button
                     className="bg-slate-50 text-black rounded-full text-xl hover:bg-slate-200"
                     onClick={backToTop}
                     title="Voltar ao topo da página"
                     whileHover={{ y: -3 }}
                    >
                        <HiChevronUp />
                    </motion.button>
                </div>
            </div>
        </footer>
    )
}