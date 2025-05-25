import { useInfiniteQuery } from "@tanstack/react-query";
import APIClient, { type FetchResponse } from "../services/api-client";
import type { GifQuery } from "../store";
import useGifQueryStore from "../store";

interface Properties {
  fixed_width: {
    url: string;
    height: string;
    width: string;
  };
  original: {
    url: string;
    height: string;
    width: string;
  };
  downsized: {
    url: string;
    height: string;
    width: string;
  };
}

export interface Gif {
  id: string;
  title: string;
  images: Properties;
  slug: string;
}

type GifType = "gifs" | "stickers" | undefined;

const useGifs = (gifQuery: GifQuery) => {
  const selectedTab = useGifQueryStore((s) => s.tabQuery.selectedTab);
  const type: GifType =
    selectedTab === 0 ? "gifs" : selectedTab === 1 ? "stickers" : undefined;

  const endpoint =
    gifQuery.search || gifQuery.tag ? `/${type}/search` : `/${type}/trending`;
  const apiClient = new APIClient<Gif>(endpoint);

  return useInfiniteQuery<FetchResponse<Gif>, Error>({
    queryKey: ["gifs", gifQuery, "type", type],
    queryFn: ({ pageParam }) =>
      apiClient.getAll({
        params: {
          q: gifQuery.search || gifQuery.tag,
          offset: pageParam,
        },
      }),
    staleTime: 24 * 60 * 60 * 1000, //24h
    initialPageParam: 0,
    getNextPageParam: (lastPage) => {
      const { pagination } = lastPage;
      const nextoffset = pagination.offset + pagination.count;
      return nextoffset < pagination.total_count ? nextoffset : undefined;
    },
  });
};

export default useGifs;
