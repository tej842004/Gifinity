import axios, { type AxiosRequestConfig } from "axios";

interface Pagination {
  total_count: number;
  count: number;
  offset: 0;
}

export interface FetchResponse<T> {
  data: T[];
  pagination: Pagination;
}

const axiosInstance = axios.create({
  baseURL: "https://api.giphy.com/v1/",
  params: {
    api_key: "zbtII7euvvAA3roBvkQdnLFO1U0XlMaM",
  },
});

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = async (conifg: AxiosRequestConfig) => {
    const res = await axiosInstance.get<FetchResponse<T>>(
      this.endpoint,
      conifg
    );
    return res.data;
  };

  get = async (conifg: AxiosRequestConfig) => {
    const res = await axiosInstance.get<FetchResponse<T>>(this.endpoint, conifg);
    return res.data;
  };
}

export default APIClient;
