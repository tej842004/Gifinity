import { Button, Stack, Text } from "@chakra-ui/react";
import { tags } from "../data/tags";

const Tags = () => {
  return (
    <Stack
      direction="row"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      {tags.map((tag) => (
        <Button variant="solid" key={tag.id}>
          <Text fontSize="md">{tag.name}</Text>
        </Button>
      ))}
    </Stack>
  );
};

export default Tags;
