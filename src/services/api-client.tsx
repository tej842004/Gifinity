import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://api.giphy.com/v1/gifs",
  params: {
    key: "zbtII7euvvAA3roBvkQdnLFO1U0XlMaM",
  },
});

export default apiClient;
