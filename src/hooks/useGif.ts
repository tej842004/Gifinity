import type { GifQuery } from "../App";
import useData from "./useData";

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

const useGif = (gifQuery: GifQuery) => {
  const endpoint = gifQuery.search || gifQuery.tag ? "/search" : "/trending";
  return useData<Gif>(
    endpoint,
    {
      params: {
        q: gifQuery.search || gifQuery.tag,
      },
    },
    [gifQuery]
  );
};

export default useGif;
