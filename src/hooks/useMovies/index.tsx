import { getCategory } from "@/services/http";
import { useQuery } from "react-query";
import { useState, useEffect } from "react"
import { Movie } from "@/types/utils";
import { removeRepeat } from "@/utils";

export function useMovies(){
    const topMoviesQuery = useQuery('top_movies', () => getCategory('movie', 'top_rated'));
    const popularMoviesQuery= useQuery('popular_movies', () => getCategory('movie', 'popular'));
    const latestMoviesQuery = useQuery('latest_movies', () => getCategory('movie', 'now_playing'));

    const [topMovies, setTopMovies] = useState<Movie[]>([]);
    const [popularMovies, setPopularMovies] = useState<Movie[]>([]);
    const [latestMovies, setLatestMovies] = useState<Movie[]>([]);
    const [allMovies, setAllMovies] = useState<Movie[]>([]);

    const [isLoading, setIsLoading] = useState<boolean>(true)

    useEffect(() => {
        const concatMovies = topMoviesQuery.data.results.concat(popularMoviesQuery.data.results, latestMoviesQuery.data.results)
        const noRepeatMovies = removeRepeat(concatMovies)
        if(topMoviesQuery.isSuccess && popularMoviesQuery.isSuccess && latestMoviesQuery.isSuccess){
            setTopMovies(topMoviesQuery.data.results);
            setPopularMovies(popularMoviesQuery.data.results);
            setLatestMovies(latestMoviesQuery.data.results);
            setAllMovies(noRepeatMovies);
        }
    }, [topMoviesQuery.data, popularMoviesQuery.data, latestMoviesQuery.data])

    return {topMovies, popularMovies, latestMovies, setAllMovies}
}