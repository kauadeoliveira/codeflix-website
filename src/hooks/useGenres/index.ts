import type { Type } from "@/types/api";
import type { Genre } from "@/types/utils";
import { apiKey } from "@/constants";
import { removeRepeat } from "@/utils";
import { useEffect, useState } from "react";
import axios from "axios";
import { useQuery } from "react-query"; // Importei o hook `useQuery` para fazer buscas a apis, ele facilita bastante esse trabalho. 
/* 
    React Query é uma biblioteca de gerenciamento de estado em cache para React que ajuda a lidar com dados assíncronos. Ele fornece uma maneira fácil de buscar, armazenar em cache e atualizar dados, e também oferece recursos como refetching automático, cancelamento de solicitação e gerenciamento de cache inteligente.
*/

async function getGenres(type: Type){
    const response = await axios.get(`https://api.themoviedb.org/3/genre/${type}/list?api_key=${apiKey}&language=pt-BR`);
    return response.data;
}

export function useGenres() {
    const movieGenresQuery = useQuery('movie_genres', () => getGenres('movie')); // Busca todos os generos de filmes
    const serieGenresQuery = useQuery('serie_genres', () => getGenres('tv')); // Busca todos os generos de series

    const [allGenres, setAllGenres] = useState<Genre[]>([]);
    const [movieGenres, setMovieGenres] = useState<Genre[]>([]);
    const [serieGenres, setSerieGenres] = useState<Genre[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true); // Estado de Loading para ambas requsições
    const [isError, setIsError] = useState<boolean>(false);

    // Estado de Loading só fica falso quando AMBAS requisições tem seu estado de Loading falso.
    useEffect(() => {
        if(movieGenresQuery.isLoading || serieGenresQuery.isLoading){
            setIsLoading(true)
        }else{
            setIsLoading(false)
        }
    }, [movieGenresQuery.isLoading, serieGenresQuery.isLoading])


    useEffect(() => {
        if(movieGenresQuery.isSuccess && serieGenresQuery.isSuccess){
            const concatGenres = removeRepeat(movieGenresQuery.data.genres.concat(serieGenresQuery.data.genres));
            setMovieGenres(movieGenresQuery.data.genres);
            setSerieGenres(serieGenresQuery.data.genres);
            setAllGenres(concatGenres);
        }else{
            setIsError(true)
        }
    }, [movieGenresQuery.data, serieGenresQuery.data]);

    return {
        movieGenres: {
            isLoading: movieGenresQuery.isLoading,
            isError: movieGenresQuery.isError,
            data: movieGenres
        },
        serieGenres: {
            isLoading: serieGenresQuery.isLoading,
            isError: serieGenresQuery.isError,
            data: serieGenres
        },
        allGenres: {
            isLoading: isLoading,
            isError: isError,
            data:  allGenres
        }
    }
}