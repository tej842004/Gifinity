import { Box, Heading, Image, Show, Spinner, Text } from "@chakra-ui/react";
import { IoIosTrendingUp } from "react-icons/io";
import Masonry from "react-masonry-css";
import type { GifQuery } from "../App";
import useGif from "../hooks/useGif";
import useGifTab from "../hooks/useGifTab";
import AppTabs from "./AppTabs";

interface Props {
  gifQuery: GifQuery;
}

const GifGrid = ({ gifQuery }: Props) => {
  const { selectedTab, setSelectedTab, type } = useGifTab();
  const gifType = type === "gifs" || type === "stickers" ? type : undefined;

  const { data: gifs, isLoading, error } = useGif(gifQuery, gifType);

  const breakpointColumnsObj = { default: 7, 1100: 3, 768: 2, 0: 1 };

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
    <Box px={5}>
      <Box
        display="flex"
        justifyContent={{ base: "center", md: "space-between" }}
        alignItems="center"
        mb={4}
      >
        <Show above="md">
          <Heading
            fontFamily={`'Inter', sans-serif`}
            display="flex"
            flexDirection="row"
            alignItems="center"
            justifyContent="flex-start"
            gap={2}
          >
            <IoIosTrendingUp />
            Trending Now
          </Heading>
        </Show>
        <AppTabs onTabChange={setSelectedTab} selectedTab={selectedTab} />
      </Box>

      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {gifs.map((gif) => (
          <Box key={gif.id}>
            <Image
              src={gif.images.fixed_width.url}
              alt={gif.title}
              width="100%"
              objectFit="cover"
            />
          </Box>
        ))}
      </Masonry>
    </Box>
  );
};

export default GifGrid;
