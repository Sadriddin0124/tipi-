import { DataType } from "../components/home/Hero";
import { NewsType } from "../types/all.types";
import apiClient from "./apiClient";
import { INews, ITeacher } from "./types";

export type DirectionsType = {
    image: {file: string}
    title_uz: string
    title_ru: string
    title_en: string
}

const fetchTeachers = async (): Promise<ITeacher[]> => {
    const { data } = await apiClient.get('/teachers');

    return data;
}



const fetchNews = async (category: string): Promise<NewsType[]> => {
    const { data } = await apiClient.get(`/news/?category=${category}`);

    return data;
}

const fetchHero = async (page: string): Promise<DataType[]> => {
    const { data } = await apiClient.get(`/hero/?page=${page}`);

    return data;
}
const fetchDirection = async (page: string): Promise<DirectionsType> => {
    const { data } = await apiClient.get(`/directions/${page}`);

    return data;
}




export { fetchTeachers, fetchNews, fetchHero, fetchDirection };