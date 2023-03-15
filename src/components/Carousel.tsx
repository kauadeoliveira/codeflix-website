"use client";

import { ChildrenType } from "@/types/children";
import { motion } from "framer-motion"
import { useState, useRef, useEffect } from "react";

type CarouselType = {
    children: ChildrenType;
}

export default function Carousel({ children }: CarouselType) {
    const carouselRef = useRef<HTMLDivElement>(null);
    const [width, setWidth] = useState(0);

    useEffect(() => {
        if(carouselRef.current){
            console.log(carouselRef.current.offsetWidth, carouselRef.current.scrollWidth)
            setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth)
            //scrollWidth é o TOTAL de scroll que podemos scrollar no eixo X e offsetWidth é o que já foi scrollado no eixo X.
            //scrollWidth - offsetWidth = valor que ainda falta ser scrollado.
        }
    }, [])

    return( 
        <motion.div ref={carouselRef} className="cursor-grab overflow-hidden" whileTap={{ cursor: 'grabbing' }}>
            <motion.div
            className="flex gap-3"
            drag="x"
            dragConstraints={{ right: 0, left:-width }} //definimos -width pra left pois é o limite que queremos scrolar pra esquerda
            >
                {children}
            </motion.div>
        </motion.div>
    )
}