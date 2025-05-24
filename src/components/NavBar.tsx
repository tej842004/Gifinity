import { Heading, HStack } from "@chakra-ui/react";
import SearchInput from "./SearchInput";
import ToggleButton from "./ToggleButton";

const NavBar = () => {
  return (
    <HStack padding="10px" gap={5}>
      <Heading size="lg">Gifinity</Heading>
      <SearchInput />
      <ToggleButton />
    </HStack>
  );
};

export default NavBar;
