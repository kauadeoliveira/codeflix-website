import { Genre } from "@/types/utils/genre";

export function removeRepeatGenre(array: Genre[]): Genre[] {
    const newArray: Genre[] = [];
    array.map(genre => newArray.find(g => g.name === genre.name) ? false : newArray.push(genre));

    return newArray
}