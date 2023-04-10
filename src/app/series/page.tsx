"use client"

import { useMovies, useSeries, useWindowSize } from "@/hooks"
import { Poster, VideoCard } from "@/components";
import { useState, useEffect } from "react";
import Head from "next/head";

export default function Series() {
    const { allSeries } = useSeries();
    const seriesWithPoster = allSeries.data && allSeries.data.filter(movie => movie.poster_path && movie.backdrop_path); 
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

    useEffect(() => console.log(seriesWithPoster), [seriesWithPoster])

    return(
        <div>
            <Head>
            <title>Series</title>
            <meta property="og:title" content="Series" key="series-title" />
            </Head>
            <main className="flex flex-col gap-3 mb-32">
                {seriesWithPoster && (
                <Poster
                 images={{
                     lg: seriesWithPoster[0].backdrop_path,
                     sm: seriesWithPoster[0].poster_path
                 }}
                 overview={seriesWithPoster[0].overview}
                 route="#"
                 title={seriesWithPoster[0].name}
                />
                )}
                <div className="px-4">
                    <h2 className="text-xl font-bold mb-2 ml-1 capitalize font-poppins">Series</h2>
                    <div className={`grid gap-3 ${gridResponsiveClass}`}>
                        {seriesWithPoster?.map(serie => (
                            <VideoCard img={serie.poster_path} route="#" title={serie.name} key={serie.id}/>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    )
}