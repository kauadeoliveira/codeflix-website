import axios from "axios";
import { apiKey } from "./apiKey";

// APENAS UM EXEMPLO
export async function fetchMovie(id: number):Promise<any> {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`)

    return response.data
}