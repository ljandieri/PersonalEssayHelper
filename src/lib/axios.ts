import axios, { InternalAxiosRequestConfig } from 'axios';
import { GPT_API_KEY, GPT_API_URL } from '@/config';

export const axiosClient = axios.create({
  baseURL: GPT_API_URL,
});

axiosClient.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  config.headers['Content-Type'] = 'application/json';
  config.headers['Authorization'] = `Bearer ${GPT_API_KEY}`;
  return config;
});
