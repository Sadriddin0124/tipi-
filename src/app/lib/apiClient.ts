import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://tipiprojectsectorsoft.pythonanywhere.com", // API asosiy URL
  headers: {
    "Content-Type": "application/json",
    
  },
});

export default apiClient;
