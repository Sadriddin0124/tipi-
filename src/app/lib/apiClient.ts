import axios from "axios";
export const BASE_URL = "https://api.tipi.sector-soft.ru/api/"
const apiClient = axios.create({
  baseURL: "https://api.tipi.sector-soft.ru/api/", // API asosiy URL
  headers: {
    "Content-Type": "application/json",
    
  },
});

export default apiClient;
