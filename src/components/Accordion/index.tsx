"use client"

import { ChildrenType } from '@/types/children';
import { useState } from 'react';

type AccordionType = {
    title: string;
    children: ChildrenType;
}


export const Accordion = ({ title, children }: AccordionType) => {
    const [openAccordion, setOpenAccordion] = useState<boolean>(false);
    const handleOpenAccordion = () => setOpenAccordion(!openAccordion);

    return(
        <div>
            <button onClick={handleOpenAccordion} className='uppercase font-bold'>
                {title}
            </button>
            <div className={`${openAccordion ? "block" : "hidden"} text-base px-2`}>
                {children}
            </div>
        </div>
    )
}