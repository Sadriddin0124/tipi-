import { NewsType } from "../types/all.types";
import apiClient from "./apiClient";
import { INews, ITeacher } from "./types";



const fetchTeachers = async (): Promise<ITeacher[]> => {
    const { data } = await apiClient.get('/teachers');

    return data;
}



const fetchNews = async (category: string): Promise<NewsType[]> => {
    const { data } = await apiClient.get(`/news/?category=${category}`);

    return data;
}




export { fetchTeachers, fetchNews };