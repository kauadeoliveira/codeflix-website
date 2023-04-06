"use client"

import { useMovies } from "@/hooks"
import { VideoCard } from "@/components";

export default function Filmes() {
    const { allMovies } = useMovies();
    const movieWithPoster = allMovies.data && allMovies.data.filter(movie => movie.poster_path); 
    return(
        <main>
            <span>Todos os Filmes disponiveis</span>
            <div className="grid grid-cols-11">
                {movieWithPoster?.map(movie => (
                    <VideoCard img={movie.poster_path} route="#" title={movie.title} key={movie.id}/>
                ))}
            </div>
        </main>
    )
}