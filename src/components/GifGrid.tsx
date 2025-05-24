import { Box, Heading, Image, Show, Spinner, Text } from "@chakra-ui/react";
import { IoIosTrendingUp } from "react-icons/io";
import InfiniteScroll from "react-infinite-scroll-component";
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

  const {
    data: gifs,
    error,
    isLoading,
    fetchNextPage,
    hasNextPage,
  } = useGif(gifQuery, gifType);

  const breakpointColumnsObj = { default: 7, 1100: 3, 768: 2, 0: 1 };

  const fetchGifCount =
    gifs?.pages.reduce((total, page) => total + page.data.length, 0) || 0;

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

      {isLoading && (
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          height="50vh"
        >
          <Spinner />
        </Box>
      )}

      {error && (
        <Text
          display="flex"
          alignItems="center"
          justifyContent="center"
          height="50vh"
        >
          {error.message}
        </Text>
      )}

      {!isLoading && !error && gifs && (
        <InfiniteScroll
          dataLength={fetchGifCount}
          hasMore={!!hasNextPage}
          next={() => fetchNextPage()}
          loader={
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              marginY="5px"
            >
              <Spinner />
            </Box>
          }
        >
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {gifs.pages.map((page) =>
              page.data.map((gif) => (
                <Box key={gif.id}>
                  <Image
                    src={gif.images.fixed_width.url}
                    alt={gif.title}
                    width="100%"
                    objectFit="cover"
                  />
                </Box>
              ))
            )}
          </Masonry>
        </InfiniteScroll>
      )}
    </Box>
  );
};

export default GifGrid;
