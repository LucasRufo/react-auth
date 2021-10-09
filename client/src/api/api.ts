import axios, { AxiosError } from "axios";
import { history } from "../App";

const API_URL = import.meta.env.VITE_API_URL as string ?? '';

const api = axios.create({
  baseURL: API_URL,
});

api.interceptors.response.use(function (response) {
  return response;
}, function (error: AxiosError) {
  
  console.log(error)
  
  if(error.code === '401') {
    localStorage.removeItem('token');

    history.push('/');
  }

  return Promise.reject(error);
});

export default api;