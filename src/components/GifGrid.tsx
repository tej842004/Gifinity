import { Box, Image, Spinner } from "@chakra-ui/react";
import Masonry from "react-masonry-css";
import useGif from "../hooks/useGif";

const GifGrid = () => {
  const { gifs, isLoading, error } = useGif();

  const breakpointColumnsObj = {
    default: 4, // xl and above
    1100: 3, // lg screens
    768: 2, // md screens
    0: 1, // base (mobile)
  };

  if (isLoading) return <Spinner />;

  if (error) return null;

  return (
    <Box px={4}>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {gifs.map((gif) => (
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
