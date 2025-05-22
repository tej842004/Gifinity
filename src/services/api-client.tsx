import axios from "axios";

export interface FetchResponse<T> {
  data: T[];
}

const apiClient = axios.create({
  baseURL: "https://api.giphy.com/v1/",
  params: {
    api_key: "qWEnwTx6facTjeAHW4Lj2dsZExYblSNT",
  },
});

export default apiClient;
