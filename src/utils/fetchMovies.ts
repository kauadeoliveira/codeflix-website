import axios from "axios";
import { apiKey } from "./apiKey";

// APENAS UM EXEMPLO
export async function fetchTopRatedMovies():Promise<any> {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=2`)

    return response.data
}