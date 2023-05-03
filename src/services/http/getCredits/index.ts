import { apiKey } from "@/constants";
import { Type } from "@/types/api";
import axios from "axios";

export async function getCredits(type: Type, id: number | string) {
    const response = await axios.get(`https://api.themoviedb.org/3/${type}/${id}/credits?api_key=${apiKey}&language=pt-BR`);
    return response.data;
}