import { apiKey } from "@/constants";
import { Type } from "@/types/api";
import axios from "axios";

export async function getDetails(type: Type, id: number) {
    const response = await axios.get(`https://api.themoviedb.org/3/${type}/${id}?api_key=${apiKey}&language=pt-BR`);
    return response.data;
}