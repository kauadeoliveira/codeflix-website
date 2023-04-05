import { getCategory } from "@/services/http";
import { useQuery } from "react-query";
import { useState, useEffect } from "react"
import { Movie } from "@/types/utils";
import { removeRepeat } from "@/utils";

export function useMovies(){
    const [topMovies, setTopMovies] = useState<Movie[]>();
    const [popularMovies, setPopularMovies] = useState<Movie[]>();
    const [latestMovies, setLatestMovies] = useState<Movie[]>();
    const [allMovies, setAllMovies] = useState<Movie[]>();
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [isError, setIsError] = useState<boolean>(false);

    const topMoviesQuery = useQuery('top_movies', () => getCategory('movie', 'top_rated'));
    const popularMoviesQuery= useQuery('popular_movies', () => getCategory('movie', 'popular'));
    const latestMoviesQuery = useQuery('latest_movies', () => getCategory('movie', 'now_playing'));
    
    useEffect(() => {
        if(!topMoviesQuery.isLoading && !popularMoviesQuery.isLoading && !latestMoviesQuery.isLoading){
            setIsLoading(false)
        }
    }, [topMoviesQuery.isLoading, popularMoviesQuery.isLoading, latestMoviesQuery.isLoading])

    useEffect(() => {
        setTopMovies(topMoviesQuery.data?.results);
        setPopularMovies(popularMoviesQuery.data?.results);
        setLatestMovies(latestMoviesQuery.data?.results);
    }, [topMoviesQuery.isLoading, popularMoviesQuery.isLoading, latestMoviesQuery.isLoading])

    useEffect(() => {
        if(topMoviesQuery.isError && popularMoviesQuery.isError && latestMoviesQuery.isError){
            setIsError(true)
        }
    }, [topMoviesQuery.isError, popularMoviesQuery.isError, latestMoviesQuery.isError])
    
    useEffect(() => {
        if(topMovies && popularMovies && latestMovies){
            const concatMovies = topMovies.concat(popularMovies, latestMovies);
            const noRepeatMovies = removeRepeat(concatMovies);
            setAllMovies(noRepeatMovies);
        }
    }, [isLoading])

    return {
        allMovies: {
            isLoading: isLoading,
            isError: isError,
            data: allMovies,
        },
        topMovies: {
            isLoading: topMoviesQuery.isLoading,
            isError: topMoviesQuery.isError,
            data: topMovies
        },
        popularMovies: {
            isLoading: popularMoviesQuery.isLoading,
            isError: popularMoviesQuery.isError,
            data: popularMovies
        },
        latestMovies: {
            isLoading: latestMoviesQuery.isLoading,
            isError: latestMoviesQuery.isError,
            data: latestMovies
        }
    }
}