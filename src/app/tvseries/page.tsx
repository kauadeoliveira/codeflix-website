"use client"

import { Poster, ProductionCard } from "@/components";
import { useSeries, useWindowSize } from "@/hooks";
import { useEffect, useState } from "react";

type gridNumColumnsByScreenWidthType = {
    [key: string]: number
    320: number;
    425: number;
    550: number;
    750: number;
    950: number;
    1150: number;
    1350: number;
}

export default function TvSeries() {
    const { allSeries } = useSeries();
    const serieWithPoster = allSeries.data && allSeries.data.filter(movie => movie.poster_path && movie.backdrop_path); 
    const { width } = useWindowSize();
    const [gridNumColumns, setGridNumColumns] = useState<number>();

    const gridNumColumnsByScreenWidth: gridNumColumnsByScreenWidthType = {
        320: 2,
        425: 3,
        550: 4,
        750: 6,
        950: 7,
        1150: 9,
        1350: 10,
    }
    
    useEffect(() => {
        if(width){
            const screenWidth = Object.keys(gridNumColumnsByScreenWidth).reverse().find(key => Number(key) <= width)
            screenWidth && setGridNumColumns(gridNumColumnsByScreenWidth[screenWidth])
        }

    }, [width])

    return(
        <main className="flex flex-col gap-3 mb-32">
            {serieWithPoster && (
            <Poster
             images={{
                 lg: serieWithPoster[0].backdrop_path,
                 sm: serieWithPoster[0].poster_path
             }}
             overview={serieWithPoster[0].overview}
             route="#"
             title={serieWithPoster[0].title ?? ''}
            />
            )}
            <div className="px-4">
                <h2 className="text-xl font-bold mb-2 ml-1 capitalize font-poppins">Séries</h2>
                <div className={`grid gap-3 grid-cols-${gridNumColumns}`}>
                    {serieWithPoster?.map(serie => (
                        <ProductionCard img={serie.poster_path} route="#" title={serie.name ?? ''} key={serie.id}/>
                    ))}
                </div>
            </div>
        </main>
    )
}