import { Box, Button, IconButton, Text } from "@chakra-ui/react";
import React from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import "react-horizontal-scrolling-menu/dist/styles.css";
import { IoIosTrendingUp } from "react-icons/io";
import { TfiAngleDoubleLeft, TfiAngleDoubleRight } from "react-icons/tfi";
import useSearches from "../hooks/useSearches";
import useGifQueryStore from "../store";

const LeftArrow = () => {
  const { scrollPrev } = React.useContext(VisibilityContext);
  return (
    <IconButton
      aria-label="double left button"
      icon={<TfiAngleDoubleLeft />}
      variant="ghost"
      onClick={() => scrollPrev()}
    />
  );
};

const RightArrow = () => {
  const { scrollNext } = React.useContext(VisibilityContext);
  return (
    <IconButton
      aria-label="double right button"
      icon={<TfiAngleDoubleRight />}
      variant="ghost"
      onClick={() => scrollNext()}
    />
  );
};

const Tags = () => {
  const { data: tags, isLoading, error } = useSearches();
  const setSelectTag = useGifQueryStore((s) => s.setSelectTag);
  const gifQuery = useGifQueryStore((s) => s.gifQuery);

  const selectedTag = gifQuery.tag;

  if (isLoading) return null;

  if (error) return null;

  return (
    <Box width="80vw" mx="auto" marginBottom={3}>
      {tags?.data && (
        <ScrollMenu
          LeftArrow={<LeftArrow />}
          RightArrow={<RightArrow />}
          wrapperClassName="hide-scrollbar"
        >
          {tags.data.map((tag, index) => (
            <Button
              variant={tag === selectedTag ? "solid" : "outline"}
              key={index}
              onClick={() => setSelectTag(tag)}
              mx={1}
            >
              <Text
                fontSize="md"
                display="flex"
                flexDirection="row"
                alignItems="center"
                justifyContent="center"
                gap={2}
              >
                <IoIosTrendingUp />
                {tag}
              </Text>
            </Button>
          ))}
        </ScrollMenu>
      )}
    </Box>
  );
};

export default Tags;
