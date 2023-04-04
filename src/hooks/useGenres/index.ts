import { Type } from "@/types/api";
import axios from "axios";
import { Genre } from "@/types/utils/genre";
import { useEffect, useState } from "react";
import { apiKey } from "@/constants";

// Esse hook usa a biblioteca react-query para fazer buscas a apis e gerenciar o estado de cache.
import { useQuery } from "react-query";
/* 
    React Query é uma biblioteca de gerenciamento de estado em cache para React que ajuda a lidar com dados assíncronos. Ele fornece uma maneira fácil de buscar, armazenar em cache e atualizar dados, e também oferece recursos como refetching automático, cancelamento de solicitação e gerenciamento de cache inteligente.

    Importei o hook `useQuery` para fazer buscas a apis, ele facilita bastante esse trabalho. 
*/

async function getGenres(type: Type){
    const response = await axios.get(`https://api.themoviedb.org/3/genre/${type}/list?api_key=${apiKey}&language=pt-BR`);
    return response.data;
}

export function removeRepeatGenre(array: Genre[]): Genre[] {
    const newArray: Genre[] = [];
    array.map(genre => newArray.find(g => g.name === genre.name) ? false : newArray.push(genre));

    return newArray
}

export function useGenres() {
    const movieGenresQuery = useQuery('movie_genres', () => getGenres('movie'));
    const serieGenresQuery = useQuery('serie_genres', () => getGenres('tv'));

    const [allGenres, setAllGenres] = useState<Genre[]>([]);
    const [movieGenres, setMovieGenres] = useState<Genre[]>([]);
    const [serieGenres, setSerieGenres] = useState<Genre[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        if(movieGenresQuery.isLoading || serieGenresQuery.isLoading){
            setIsLoading(true)
        }else{
            setIsLoading(false)
        }
    }, [movieGenresQuery.isLoading, serieGenresQuery.isLoading])

    useEffect(() => {
        if(movieGenresQuery.isSuccess && serieGenresQuery.isSuccess){
            const concatGenres = removeRepeatGenre(movieGenresQuery.data.genres.concat(serieGenresQuery.data.genres));
            setMovieGenres(movieGenresQuery.data.genres);
            setSerieGenres(serieGenresQuery.data.genres);
            setAllGenres(concatGenres);
        }
    }, [movieGenresQuery.data, serieGenresQuery.data]);

    return {
        isLoading,
        data: { movieGenres, serieGenres, allGenres }
    }
}