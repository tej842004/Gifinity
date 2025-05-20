import { Heading, HStack } from "@chakra-ui/react";
import SearchInput from "./SearchInput";
import ToggleButton from "./ToggleButton";

interface Props {
  onSearch: (searchString: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  return (
    <HStack padding="10px" gap={5}>
      <Heading size="md">Gifinity</Heading>
      <SearchInput onSearch={onSearch} />
      <ToggleButton />
    </HStack>
  );
};

export default NavBar;
