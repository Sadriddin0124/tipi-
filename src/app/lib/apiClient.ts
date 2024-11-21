import axios from "axios";
export const BASE_URL = "https://tipibackend.pythonanywhere.com/api"
const apiClient = axios.create({
  baseURL: "https://tipibackend.pythonanywhere.com/api", // API asosiy URL
  headers: {
    "Content-Type": "application/json",
    
  },
});

export default apiClient;
