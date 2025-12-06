import { Metadata } from "next";
import { API_URL } from "./constant";
import { getApiData } from "./getApiData";
import { IMovie } from "@/types/tmdb";

export async function getMetadata(id: string): Promise<Metadata> {
    try {
        const { title } = await getApiData<IMovie>(`${API_URL}/${id}`);
        return {
            title: title,
        };
    } catch (error) {
        return {
            title: "Error",
        };
    }
}
