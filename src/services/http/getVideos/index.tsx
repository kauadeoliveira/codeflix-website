import { apiKey } from "@/constants"
import { Type } from "@/types/api";
import axios from "axios"

export async function getVideos(type: Type, id: number | string) {
    const response = await axios.get(`https://api.themoviedb.org/3/${type}/${id}/videos?api_key=${apiKey}&language=pt-BR`);
    return response.data
}