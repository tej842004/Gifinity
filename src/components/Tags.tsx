import { Button, Stack, Text } from "@chakra-ui/react";
import { tags } from "../data/tags";

interface Props {
  onSelectTag: (selectTag: string) => void;
}

const Tags = ({ onSelectTag }: Props) => {
  return (
    <Stack
      direction="row"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      {tags.map((tag) => (
        <Button
          variant="outline"
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
