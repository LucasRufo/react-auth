import axios, { AxiosError } from "axios";

const API_URL = import.meta.env.VITE_API_URL as string ?? '';

const api = axios.create({
  baseURL: API_URL,
});

api.interceptors.response.use(function (response) {
  return response;
}, function (error: AxiosError) {
  
  console.log(error)
  if(error.code === '401') {
    //sign out
  }

  return Promise.reject(error);
});

export default api;