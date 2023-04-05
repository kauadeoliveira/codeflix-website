import { getCategory } from "@/services/http";
import { useQuery } from "react-query";
import { useState, useEffect } from "react"
import { Movie } from "@/types/utils";
import { removeRepeat } from "@/utils";

export function useSeries(){
    const [topSeries, setTopSeries] = useState<Movie[]>();
    const [popularSeries, setPopularSeries] = useState<Movie[]>();
    const [latestSeries, setLatestSeries] = useState<Movie[]>();

    const [allSeries, setAllSeries] = useState<Movie[]>();
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [isError, setIsError] = useState<boolean>(false);

    const topSeriesQuery = useQuery('top_movies', () => getCategory('tv', 'top_rated'));
    const popularSeriesQuery = useQuery('popular_movies', () => getCategory('tv', 'popular'));
    const latestSeriesQuery = useQuery('latest_movies', () => getCategory('tv', 'now_playing'));
    
    useEffect(() => {
        if(!topSeriesQuery.isLoading && !popularSeriesQuery.isLoading && !latestSeriesQuery.isLoading){
            setIsLoading(false)
        }
    }, [topSeriesQuery.isLoading, popularSeriesQuery.isLoading, latestSeriesQuery.isLoading])

    useEffect(() => {
        setTopSeries(topSeriesQuery.data?.results);
        setPopularSeries(popularSeriesQuery.data?.results);
        setLatestSeries(latestSeriesQuery.data?.results);
    }, [topSeriesQuery.isLoading, popularSeriesQuery.isLoading, latestSeriesQuery.isLoading])

    useEffect(() => {
        if(topSeriesQuery.isError && popularSeriesQuery.isError && latestSeriesQuery.isError){
            setIsError(true)
        }
    }, [topSeriesQuery.isError, popularSeriesQuery.isError, latestSeriesQuery.isError])
    
    useEffect(() => {
        if(topSeries && popularSeries && latestSeries){
            const concatSeries = topSeries.concat(popularSeries, latestSeries);
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
        latestSeries: {
            isLoading: latestSeriesQuery.isLoading,
            isError: latestSeriesQuery.isError,
            data: latestSeries
        }
    }
}