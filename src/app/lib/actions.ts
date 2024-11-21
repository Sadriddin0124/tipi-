import apiClient from "./apiClient";

export const fetchAboutTipi = async () => {
  const response = await apiClient.get(`/about-university/`); // `/users` endpoint
  return response.data; // Faqat `data` ni qaytarish
};

export const fetchAdmin = async () => {
  const response = await apiClient.get(`/adminstration/`); // `/users` endpoint
  return response.data; // Faqat `data` ni qaytarish
};

export const fetchFaculties = async () => {
  const response = await apiClient.get(`/faculties`); // `/users` endpoint
  return response.data; // Faqat `data` ni qaytarish
};

export const fetchSections = async () => {
  const response = await apiClient.get(`/department/`); // `/users` endpoint
  return response.data; // Faqat `data` ni qaytarish
};

export const fetchStudents = async () => {
  const response = await apiClient.get(`/students`); // `/users` endpoint
  return response.data; // Faqat `data` ni qaytarish
};

export const fetchVideoSlider = async () => {
  const response = await apiClient.get(`/students`); // `/users` endpoint
  return response.data; // Faqat `data` ni qaytarish
};

export const fetchBlog = async () => {
  const response = await apiClient.get(`/students`); // `/users` endpoint
  return response.data; // Faqat `data` ni qaytarish
};
