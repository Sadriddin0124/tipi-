import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://api.tipi.sectorsoft.uz/api/", // API asosiy URL
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiClient;
