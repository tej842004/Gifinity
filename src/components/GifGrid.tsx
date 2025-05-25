import { Box, Heading, Image, Show, Spinner, Text } from "@chakra-ui/react";
import { IoIosTrendingUp } from "react-icons/io";
import InfiniteScroll from "react-infinite-scroll-component";
import Masonry from "react-masonry-css";
import { Link } from "react-router";
import useGifs from "../hooks/useGifs";
import useGifQueryStore from "../store";
import AppTabs from "./AppTabs";

const GifGrid = () => {
  const gifQuery = useGifQueryStore((s) => s.gifQuery);

  const {
    data: gifs,
    error,
    isLoading,
    fetchNextPage,
    hasNextPage,
  } = useGifs(gifQuery);

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
        <AppTabs />
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
                  <Link to={`/gif/${gif.id}`}>
                    <Image
                      src={gif.images.fixed_width.url}
                      alt={gif.title}
                      width="100%"
                      objectFit="cover"
                    />
                  </Link>
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
