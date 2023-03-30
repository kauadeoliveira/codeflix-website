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
    const [openAccordion, setOpenAccordion] = useState<boolean>(false);

    // Altera o estado do Accordion para aberto ou fechado.
    const handleOpenAccordion = () => setOpenAccordion(!openAccordion);

    return(
        <div>
            <div onClick={handleOpenAccordion} className='uppercase font-bold flex items-center justify-between cursor-pointer'>
                {title}
                {openAccordion ? <HiMinusSm /> : <HiPlusSm />}
            </div>
            <div className={`${openAccordion ? "block" : "hidden"} text-base p-2 `}>
                {children}
            </div>
        </div>
    )
}