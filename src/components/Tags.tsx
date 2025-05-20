import { Button, Stack, Text } from "@chakra-ui/react";
import { popularTags } from "../data/populatTags";

const Tags = () => {
  return (
    <Stack
      direction="row"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      {popularTags.map((tag) => (
        <Button variant="solid" key={tag.id}>
          <Text fontSize="md">{tag.name}</Text>
        </Button>
      ))}
    </Stack>
  );
};

export default Tags;
