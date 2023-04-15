"use client"

import { useMovies, useWindowSize } from "@/hooks"
import { Poster, ProductionCard } from "@/components";
import { useState, useEffect } from "react";

export default function Filmes() {
    const { allMovies } = useMovies();
    const movieWithPoster = allMovies.data && allMovies.data.filter(movie => movie.poster_path && movie.backdrop_path); 
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
            {movieWithPoster && (
            <Poster
             images={{
                 lg: movieWithPoster[0].backdrop_path,
                 sm: movieWithPoster[0].poster_path
             }}
             overview={movieWithPoster[0].overview}
             route="#"
             title={movieWithPoster[0].title ?? ''}
            />
            )}
            <div className="px-4">
                <h2 className="text-xl font-bold mb-2 ml-1 capitalize font-poppins">Filmes</h2>
                <div className={`grid gap-3 ${gridResponsiveClass}`}>
                    {movieWithPoster?.map(movie => (
                        <ProductionCard img={movie.poster_path} route="#" title={movie.title ?? ''} key={movie.id}/>
                    ))}
                </div>
            </div>
        </main>
    )
}