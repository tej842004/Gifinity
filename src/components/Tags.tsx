import { Box, Button, IconButton, Text } from "@chakra-ui/react";
import React from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import "react-horizontal-scrolling-menu/dist/styles.css";
import { TfiAngleDoubleLeft, TfiAngleDoubleRight } from "react-icons/tfi";
import { tags } from "../data/tags";

interface Props {
  onSelectTag: (tag: string) => void;
  selectedTag: string;
}

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

const Tags = ({ onSelectTag, selectedTag }: Props) => {
  return (
    <Box width="80vw" mx="auto">
      <ScrollMenu
        LeftArrow={<LeftArrow />}
        RightArrow={<RightArrow />}
        wrapperClassName="hide-scrollbar"
      >
        {tags.map((tag) => (
          <Button
            variant={tag.name === selectedTag ? "solid" : "outline"}
            key={tag.id}
            onClick={() => onSelectTag(tag.name)}
            mx={1}
          >
            <Text fontSize="md">{tag.name}</Text>
          </Button>
        ))}
      </ScrollMenu>
    </Box>
  );
};

export default Tags;
