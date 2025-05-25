import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import type { Gif } from "./useGifs";

const apiClient = new APIClient<Gif>("gifs");

const useGif = (id: string) =>
  useQuery({
    queryKey: ["gif", id],
    queryFn: () =>
      apiClient.get({
        params: {
          ids: id,
        },
      }),
  });

export default useGif;
