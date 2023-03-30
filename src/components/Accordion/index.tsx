"use client"

import { useState } from 'react';
import { HiMinusSm, HiPlusSm } from 'react-icons/hi';
import { AccordionType } from './types';

/* 
    Um componente Accordion que extende e recolhe seu conteudo, depende do estado.

    @params {string} title - O titulo que aparecerá no topo do Accordion.
    @params {children} children - Tudo que for colocado dentro de Accordion será seu conteudo.
*/
export const Accordion = ({ title, children }: AccordionType) => {
    // Estado que indica se o Accordion ta aberto ou fechado.
    const [isOpen, setIsOpen] = useState<boolean>(false);

    // Altera o estado do Accordion para aberto ou fechado.
    const toggleAccordion = () => setIsOpen(!isOpen);

    return(
        <div>
            <div onClick={toggleAccordion} className='uppercase font-bold flex items-center justify-between cursor-pointer'>
                {title}
                {isOpen ? <HiMinusSm /> : <HiPlusSm />}
            </div>
            <div className={`${isOpen ? "block" : "hidden"} text-base p-2 `}>
                {children}
            </div>
        </div>
    )
}