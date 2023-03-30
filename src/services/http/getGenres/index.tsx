import { apiKey } from "@/constants"
import { Type } from "@/types/api";
import axios from "axios"


export async function getGenres(type: Type){
    const response = await axios.get(`https://api.themoviedb.org/3/genre/${type}/list?api_key=${apiKey}&language=pt-BR`);
    return response.data;
}