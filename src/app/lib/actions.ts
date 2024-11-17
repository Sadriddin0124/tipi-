import apiClient from "./apiClient";

export const fetchAboutTipi = async () => {
  const response = await apiClient.get(`/pages/about_tipi`); // `/users` endpoint
  return response.data; // Faqat `data` ni qaytarish
};

export const fetchAdmin = async () => {
  const response = await apiClient.get(`/pages/admin`); // `/users` endpoint
  return response.data; // Faqat `data` ni qaytarish
};

export const fetchFaculties = async () => {
  const response = await apiClient.get(`/pages/faculty`); // `/users` endpoint
  return response.data; // Faqat `data` ni qaytarish
};

export const fetchSections = async () => {
  const response = await apiClient.get(`/pages/branch`); // `/users` endpoint
  return response.data; // Faqat `data` ni qaytarish
};
