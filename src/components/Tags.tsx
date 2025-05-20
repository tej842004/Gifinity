import { Button, Stack, Text } from "@chakra-ui/react";
import { tags } from "../data/tags";

interface Props {
  onSelectTag: (tag: string) => void;
  selectedTag: string;
}

const Tags = ({ onSelectTag, selectedTag }: Props) => {
  return (
    <Stack
      direction="row"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      {tags.map((tag) => (
        <Button
          variant={tag.name === selectedTag ? "solid" : "outline"}
          key={tag.id}
          onClick={() => onSelectTag(tag.name)}
        >
          <Text fontSize="md">{tag.name}</Text>
        </Button>
      ))}
    </Stack>
  );
};

export default Tags;
