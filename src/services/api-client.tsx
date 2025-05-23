import axios from "axios";

interface Pagination {
  total_count: number;
  count: number;
  offset: 0;
}

export interface FetchResponse<T> {
  data: T[];
  pagination: Pagination;
}

const apiClient = axios.create({
  baseURL: "https://api.giphy.com/v1/",
  params: {
    api_key: "zbtII7euvvAA3roBvkQdnLFO1U0XlMaM",
  },
});

export default apiClient;
