import { getCategory } from "@/services/http";
import { useQuery } from "react-query";
import { useState, useEffect } from "react"
import { Movie } from "@/types/utils";
import { removeRepeat } from "@/utils";

export function useSeries(){
    const [topSeries, setTopSeries] = useState<Movie[]>();
    const [popularSeries, setPopularSeries] = useState<Movie[]>();

    const [allSeries, setAllSeries] = useState<Movie[]>();
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [isError, setIsError] = useState<boolean>(false);

    const topSeriesQuery = useQuery('top_series', () => getCategory('tv', 'top_rated'));
    const popularSeriesQuery = useQuery('popular_series', () => getCategory('tv', 'popular'));
    
    useEffect(() => {
        if(!topSeriesQuery.isLoading && !popularSeriesQuery.isLoading){
            setIsLoading(false)
        }
    }, [topSeriesQuery.isLoading, popularSeriesQuery.isLoading])

    useEffect(() => {
        setTopSeries(topSeriesQuery.data?.results);
        setPopularSeries(popularSeriesQuery.data?.results);
    }, [topSeriesQuery.isLoading, popularSeriesQuery.isLoading])

    useEffect(() => {
        if(topSeriesQuery.isError && popularSeriesQuery.isError){
            setIsError(true)
        }
    }, [topSeriesQuery.isError, popularSeriesQuery.isError])
    
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