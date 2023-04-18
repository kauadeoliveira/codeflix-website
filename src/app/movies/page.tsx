"use client"

import { useMovies, useSeries, useWindowSize } from "@/hooks"
import { LoadingCards, LoadingScreen, Poster, ProductionCard } from "@/components";
import { useState, useEffect } from "react";

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

export default function Movies() {
    const { allMovies } = useMovies();
    const movieWithPoster = allMovies.data && allMovies.data.filter(movie => movie.poster_path && movie.backdrop_path); 
    const { width } = useWindowSize();
    const [gridNumColumns, setGridNumColumns] = useState<number | undefined>();

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
        console.log(gridNumColumns)
        if(width){
            const screenWidth = Object.keys(gridNumColumnsByScreenWidth).reverse().find(key => Number(key) <= width)
            screenWidth && setGridNumColumns(gridNumColumnsByScreenWidth[screenWidth])
        }

    }, [width])


    return(
        <main className="flex flex-col gap-3 mb-32">
            {movieWithPoster && 
                <Poster
                images={{
                    lg: movieWithPoster[0].backdrop_path,
                    sm: movieWithPoster[0].poster_path
                }}
                overview={movieWithPoster[0].overview}
                route="#"
                title={movieWithPoster[0].title ?? ''}
                />
            }

            {gridNumColumns && 
                <div className="px-4">
                    <h2 className="text-xl font-bold mb-2 ml-1 capitalize font-poppins">Filmes</h2>
                    <div className={`grid gap-3 grid-cols-${gridNumColumns}`}>
                        {movieWithPoster?.map(movie => (
                            <ProductionCard img={movie.poster_path} route="#" title={movie.title ?? ''} key={movie.id}/>
                        ))}
                    </div>
                </div>
            }
        </main>
    )
}