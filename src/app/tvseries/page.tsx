"use client"

import { Poster, ProductionCard } from "@/components";
import { useSeries } from "@/hooks";

export default function TvSeries() {
    const { allSeries } = useSeries();
    const serieWithPoster = allSeries.data && allSeries.data.filter(movie => movie.poster_path && movie.backdrop_path); 

    return(
        <main className="flex flex-col gap-3 mb-32">
            {serieWithPoster && 
                <Poster
                images={{
                    lg: serieWithPoster[0].backdrop_path,
                    sm: serieWithPoster[0].poster_path
                }}
                overview={serieWithPoster[0].overview}
                route="#"
                title={serieWithPoster[0].title ?? ''}
                />
            }
            <div className="px-4">
                <h2 className="text-xl font-bold mb-2 ml-1 capitalize font-poppins">Séries</h2>
                <div className="grid gap-3 2xs:grid-cols-2 xs:grid-cols-3 ms:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 2xl:grid-cols-13">
                    {serieWithPoster?.map(serie => (
                        <ProductionCard img={serie.poster_path} route="#" title={serie.name ?? ''} key={serie.id}/>
                    ))}
                </div>
            </div>
        </main>
    )
}