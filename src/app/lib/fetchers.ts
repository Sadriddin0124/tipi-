import { NewsType } from "../types/all.types";
import apiClient from "./apiClient";
import { INews, ITeacher } from "./types";



const fetchTeachers = async (): Promise<ITeacher[]> => {
    const { data } = await apiClient.get('/teachers');

    return data;
}



const fetchNews = async (): Promise<NewsType[]> => {
    const { data } = await apiClient.get('/news');

    return data;
}




export { fetchTeachers, fetchNews };