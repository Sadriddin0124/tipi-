import apiClient from "./apiClient";

export const fetchAboutTipi = async () => {
  const response = await apiClient.get(`/about_tipi/`); // `/users` endpoint
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

export const fetchFaculty = async (id: string) => {
  const response = await apiClient.get(`/faculties/${id}`); // `/users` endpoint
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

export const fetchVideoSlider = async (id: string | null) => {
  const response = await apiClient.get(`/about_tipi/${id}`); // `/users` endpoint
  return response.data; // Faqat `data` ni qaytarish
};

export const fetchBlog = async (page: string) => {
  const response = await apiClient.get(`/constructor/block?page=${page}`); // `/users` endpoint
  return response.data; // Faqat `data` ni qaytarish
};

export const fetchEducators = async () => {
  const response = await apiClient.get(`/teachers/`); // `/users` endpoint
  return response.data; // Faqat `data` ni qaytarish
};
