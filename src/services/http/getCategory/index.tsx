import { apiKey } from "@/constants";
import { Category } from "@/services/types/category";
import { Type } from "@/services/types/type"
import axios from "axios"

export async function getCategory(type: Type, category: Category) {
    const response = await axios.get(
        `https://api.themoviedb.org/3/${type}/${category}?api_key=${apiKey}&language=pt-BR&page=1`
    )
    return response.data;
}