import axios from "axios";
export const BASE_URL = "https://api.tipi.sectorsoft.uz/api/"
const apiClient = axios.create({
  baseURL: "https://api.tipi.sectorsoft.uz/api/", // API asosiy URL
  headers: {
    "Content-Type": "application/json",
    
  },
});

export default apiClient;
