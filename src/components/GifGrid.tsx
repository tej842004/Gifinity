import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import Masonry from "react-masonry-css";
import { Box, Image } from "@chakra-ui/react";

interface Properties {
  fixed_width: {
    url: string;
    height: string;
    width: string;
  };
}

interface TrendingGif {
  id: string;
  title: string;
  images: Properties;
}

interface FetchResponse {
  data: TrendingGif[];
}

const GifGrid = () => {
  const [trendingGifs, setTrendingGifs] = useState<TrendingGif[]>([]);

  useEffect(() => {
    apiClient
      .get<FetchResponse>("/trending")
      .then((res) => setTrendingGifs(res.data.data))
      .catch((err) => console.log(err));
  }, []);

  const breakpointColumnsObj = {
    default: 4, // xl and above
    1100: 3, // lg screens
    768: 2, // md screens
    0: 1, // base (mobile)
  };

  return (
    <Box px={4}>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {trendingGifs.map((gif) => (
          <Box key={gif.id} mb={4} borderRadius="md" overflow="hidden">
            <Image
              src={gif.images.fixed_width.url}
              alt={gif.title}
              width="100%"
              borderRadius="md"
            />
          </Box>
        ))}
      </Masonry>
    </Box>
  );
};

export default GifGrid;
