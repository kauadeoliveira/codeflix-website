import { apiKey } from "@/constants";
import { Type } from "@/types/api";
import axios from "axios"
import { Category } from "./types";

export async function getCategory(type: Type, category: Category) {
    const response = await axios.get(
        `https://api.themoviedb.org/3/${type}/${category}?api_key=${apiKey}&language=pt-BR&page=1`
    )
    return response.data;
}