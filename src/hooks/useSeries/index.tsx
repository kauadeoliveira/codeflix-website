"use client"

import { getCategory } from "@/services/http";
import { useQuery } from "react-query";
import { useState, useEffect } from "react"
import { removeRepeat } from "@/utils";
import { ProductionType } from "@/types/utils/production";
import { Serie } from "@/types/utils";

// Hook que nos da acesso a todas as series da página 1 do The Movie DB
export function useSeries(){
    const [topSeries, setTopSeries] = useState<Serie[]>();
    const [popularSeries, setPopularSeries] = useState<Serie[]>();
    const [allSeries, setAllSeries] = useState<Serie[]>();

    // Estado que indica se todas as requisições feitas terminaram de carregar
    const [isLoading, setIsLoading] = useState<boolean>(true);

    // Estado que indica se ocorreu erro com alguma das requisições 
    const [isError, setIsError] = useState<boolean>(false);

    // Buscar series na categoria de melhores avaliações e populares
    const topSeriesQuery = useQuery('top_series', () => getCategory('tv', 'top_rated')); 
    const popularSeriesQuery = useQuery('popular_series', () => getCategory('tv', 'popular'));
    
    // Atualiza o estado de Loading para false quando as requisições terminarem de buscar os dados
    useEffect(() => {
        if(!topSeriesQuery.isLoading && !popularSeriesQuery.isLoading){
            setIsLoading(false)
        }
    }, [topSeriesQuery.isLoading, popularSeriesQuery.isLoading])

    // Define topSeries e popularSeries com os dados recebidos da api
    useEffect(() => {
        // filtrando apenas Series com backdrop_path e overview
        setTopSeries(topSeriesQuery.data?.results.filter((serie: Serie) => serie.backdrop_path && serie.overview));
        setPopularSeries(popularSeriesQuery.data?.results.filter((serie: Serie) => serie.backdrop_path && serie.overview));
    }, [topSeriesQuery.isLoading, popularSeriesQuery.isLoading])

    // Se occorrer algum erro entre as requisições o estado de isError se torna true
    useEffect(() => {
        if(topSeriesQuery.isError && popularSeriesQuery.isError){
            setIsError(true)
        }
    }, [topSeriesQuery.isError, popularSeriesQuery.isError])
    
    // Juntando as series recebidas de todas requisições em um unico estado, sem repetir nenhuma serie.
    useEffect(() => {
        if(topSeries && popularSeries){
            const concatSeries = topSeries.concat(popularSeries);
            const noRepeatSeries = removeRepeat(concatSeries);
            setAllSeries(noRepeatSeries);
        }
    }, [isLoading])

    return {
        allSeries: {
            isLoading: isLoading,
            isError: isError,
            data: allSeries,
        },
        topSeries: {
            isLoading: topSeriesQuery.isLoading,
            isError: topSeriesQuery.isError,
            data: topSeries
        },
        popularSeries: {
            isLoading: popularSeriesQuery.isLoading,
            isError: popularSeriesQuery.isError,
            data: popularSeries
        },
    }
}