"use client"

import { ChildrenType } from '@/types/children';
import { useState } from 'react';
import { HiMinusSm, HiPlusSm } from 'react-icons/hi';

type AccordionType = {
    title: string;
    children: ChildrenType;
}


export const Accordion = ({ title, children }: AccordionType) => {
    const [openAccordion, setOpenAccordion] = useState<boolean>(false);
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