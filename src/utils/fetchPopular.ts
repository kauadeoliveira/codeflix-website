import axios from "axios";
import { apiKey } from "./apiKey";

export async function fetchPopularMovies() {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`)
    return response.data;
}