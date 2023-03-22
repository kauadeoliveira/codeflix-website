import axios from "axios";
import { apiKey } from "./apiKey";

type GetDataProps = {
    type: 'movie' | 'tv'
    category: 'popular' | 'top_rated' | 'latest' | 'now_playing'
}

export async function getData(type: Pick<GetDataProps, 'type'>, category: Pick<GetDataProps, 'category'>) {
    const response = await axios.get(`https://api.themoviedb.org/3/${type}/${category}?api_key=${apiKey}&language=pt-BR&page=1`);

    return response
}