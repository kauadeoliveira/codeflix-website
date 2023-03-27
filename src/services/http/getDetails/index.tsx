import { apiKey } from "@/constants";
import axios from "axios";
import { Type } from "../../types/type";

export async function getDetails(type: Type, id: number) {
    const response = await axios.get(`https://api.themoviedb.org/3/${type}/${id}?api_key=${apiKey}&language=pt-BR`);
    return response.data;
}