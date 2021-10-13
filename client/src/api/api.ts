import axios, { AxiosError } from "axios";
import { history } from "../App";

const API_URL = import.meta.env.VITE_API_URL as string ?? '';

const token = localStorage.getItem('token');

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Authorization': 'Bearer ' + token
  }
});

api.interceptors.response.use(function (response) {
  return response;
}, function (error: AxiosError) {
  
  if(error.response.status === 401) {
    localStorage.removeItem('token');

    window.location.href = "/";
  }

  return Promise.reject(error);
});

export default api;