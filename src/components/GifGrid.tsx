import { Box, Image, Spinner, Text } from "@chakra-ui/react";
import Masonry from "react-masonry-css";
import useGif from "../hooks/useGif";

interface Props {
  searchString?: string;
  tagString?: string;
}

const GifGrid = ({ searchString, tagString }: Props) => {
  const { gifs, isLoading, error } = useGif(searchString, tagString);

  const breakpointColumnsObj = { default: 4, 1100: 3, 768: 2, 0: 1 };

  if (isLoading)
    return (
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        height="50vh"
      >
        <Spinner />
      </Box>
    );

  if (error)
    return (
      <Text
        display="flex"
        alignItems="center"
        justifyContent="center"
        height="20vh"
        color="tomato"
      >
        {error}
      </Text>
    );

  return (
    <Box px={4} py={2}>
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
