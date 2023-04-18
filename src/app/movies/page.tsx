"use client"

import { useMovies } from "@/hooks"
import { Poster, ProductionCard } from "@/components";

export default function Movies() {
    const { allMovies } = useMovies();
    const movieWithPoster = allMovies.data && allMovies.data.filter(movie => movie.poster_path && movie.backdrop_path); 

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
                <div className="px-4">
                    <h2 className="text-xl font-bold mb-2 ml-1 capitalize font-poppins">Filmes</h2>
                    <div className="grid gap-3 2xs:grid-cols-2 xs:grid-cols-3 ms:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 2xl:grid-cols-13">
                        {movieWithPoster?.map(movie => (
                            <ProductionCard img={movie.poster_path} route="#" title={movie.title ?? ''} key={movie.id}/>
                        ))}
                    </div>
                </div>
        </main>
    )
}