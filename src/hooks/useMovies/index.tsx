"use client"

import type { Movie } from "@/types/utils";
import { getCategory } from "@/services/http";
import { useQuery } from "react-query";
import { useState, useEffect } from "react"
import { removeRepeat } from "@/utils";

// Hook que nos da acesso a todos os filmes da página 1 do The Movie DB
export function useMovies(){
    const [topMovies, setTopMovies] = useState<Movie[]>();
    const [popularMovies, setPopularMovies] = useState<Movie[]>();
    const [latestMovies, setLatestMovies] = useState<Movie[]>();
    const [allMovies, setAllMovies] = useState<Movie[]>();

    // Estado que indica se todas as requisições feitas terminaram de carregar
    const [isLoading, setIsLoading] = useState<boolean>(true);

    // Estado que indica se ocorreu erro com alguma das requisições 
    const [isError, setIsError] = useState<boolean>(false);

    // Buscar dados de filmes em diferentes categorias.
    const topMoviesQuery = useQuery('top_movies', () => getCategory('movie', 'top_rated'));
    const popularMoviesQuery= useQuery('popular_movies', () => getCategory('movie', 'popular'));
    const latestMoviesQuery = useQuery('latest_movies', () => getCategory('movie', 'now_playing'));
    
    // Atualiza o estado de Loading para false quando as requisições terminarem de buscar os dados
    useEffect(() => {
        if(!topMoviesQuery.isLoading && !popularMoviesQuery.isLoading && !latestMoviesQuery.isLoading){
            setIsLoading(false)
        }
    }, [topMoviesQuery.isLoading, popularMoviesQuery.isLoading, latestMoviesQuery.isLoading])

    // Define topMovies, popularMovies e latestMovies com os dados recebidos da Api
    useEffect(() => {
        setTopMovies(topMoviesQuery.data?.results);
        setPopularMovies(popularMoviesQuery.data?.results);
        setLatestMovies(latestMoviesQuery.data?.results);
    }, [topMoviesQuery.isLoading, popularMoviesQuery.isLoading, latestMoviesQuery.isLoading])

    // Se occorrer algum erro entre as requisições o estado de isError se torna true
    useEffect(() => {
        if(topMoviesQuery.isError && popularMoviesQuery.isError && latestMoviesQuery.isError){
            setIsError(true)
        }
    }, [topMoviesQuery.isError, popularMoviesQuery.isError, latestMoviesQuery.isError])
    
    // Juntando os filmes recebidos de todas requisições em um unico estado, sem repetir nenhum filme.
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