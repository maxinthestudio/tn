import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';

const APP_URL = process.env.REACT_APP_APP_URL
const APP_PORT = process.env.REACT_APP_APP_PORT
const TIMEOUT = process.env.REACT_APP_TIMEOUT || '5000'

const client = axios.create({
  baseURL: `${APP_URL}:${APP_PORT}`,
  timeout: parseInt(TIMEOUT, 10),
});

export const request = <P,>(config: AxiosRequestConfig): Promise<AxiosResponse<P>> => {
  return client.request(config);
};