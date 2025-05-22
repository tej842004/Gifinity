import { useQuery } from "@tanstack/react-query";
import type { GifQuery } from "../App";
import apiClient, { type FetchResponse } from "../services/api-client";

interface Properties {
  fixed_width: {
    url: string;
    height: string;
    width: string;
  };
}

export interface Gif {
  id: string;
  title: string;
  images: Properties;
}

const useGif = (gifQuery: GifQuery, type: "gifs" | "stickers" = "gifs") => {
  const endpoint =
    gifQuery.search || gifQuery.tag ? `/${type}/search` : `/${type}/trending`;

  return useQuery({
    queryKey: ["gifs", gifQuery, "type", type],
    queryFn: () =>
      apiClient
        .get<FetchResponse<Gif>>(endpoint, {
          params: {
            q: gifQuery.search || gifQuery.tag,
          },
        })
        .then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000, //24h
  });
};

export default useGif;
