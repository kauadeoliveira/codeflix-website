"use client"

import { Poster, ProductionCard } from "@/components";
import { useSeries, useWindowSize } from "@/hooks";
import { useEffect, useState } from "react";

export default function TvSeries() {
    const { allSeries } = useSeries();
    const serieWithPoster = allSeries.data && allSeries.data.filter(movie => movie.poster_path && movie.backdrop_path); 
    const { width } = useWindowSize();
    const [gridResponsiveClass, setGridResponsiveClass] = useState<string>("");
    
    useEffect(() => {
        console.log(width)
            if(width && width > 425){
                setGridResponsiveClass('grid-cols-3')
            }else{
                setGridResponsiveClass('grid-cols-2')
            }

            if(width && width > 550){
                setGridResponsiveClass('grid-cols-4')
            }
            if(width && width > 750){
                setGridResponsiveClass('grid-cols-6')
            }
            if(width && width > 950){
                setGridResponsiveClass('grid-cols-7')
            }
            if(width && width > 1150){
                setGridResponsiveClass('grid-cols-9')
            }
            if(width && width > 1350){
                setGridResponsiveClass('grid-cols-10')
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
                <div className={`grid gap-3 ${gridResponsiveClass}`}>
                    {serieWithPoster?.map(serie => (
                        <ProductionCard img={serie.poster_path} route="#" title={serie.name ?? ''} key={serie.id}/>
                    ))}
                </div>
            </div>
        </main>
    )
}