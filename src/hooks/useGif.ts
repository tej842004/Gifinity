// import type { GifQuery } from "../App";
// import useData from "./useData";

// interface Properties {
//   fixed_width: {
//     url: string;
//     height: string;
//     width: string;
//   };
// }

// export interface Gif {
//   id: string;
//   title: string;
//   images: Properties;
// }

// const useGif = (gifQuery: GifQuery) => {
//   const endpoint =
//     gifQuery.search || gifQuery.tag ? "/gifs/search" : "/gifs/trending";
//   return useData<Gif>(
//     endpoint,
//     {
//       params: {
//         q: gifQuery.search || gifQuery.tag,
//       },
//     },
//     [gifQuery]
//   );
// };

// export default useGif;
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

// Add `type` parameter with default "gifs"
const useGif = (gifQuery: GifQuery, type: "gifs" | "stickers" = "gifs") => {
  const endpoint =
    gifQuery.search || gifQuery.tag ? `/${type}/search` : `/${type}/trending`;

  return useData<Gif>(
    endpoint,
    {
      params: {
        q: gifQuery.search || gifQuery.tag,
      },
    },
    [gifQuery, type] // trigger refetch when type or query changes
  );
};

export default useGif;
