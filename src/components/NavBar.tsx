import {
  Box,
  Heading,
  HStack,
  Spacer,
  useBreakpointValue,
  VStack,
} from "@chakra-ui/react";
import { Link } from "react-router";
import SearchInput from "./SearchInput";
import ToggleButton from "./ToggleButton";

const NavBar = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Box padding="10px">
      {isMobile ? (
        <VStack align="stretch" gap={3}>
          <HStack justify="space-between">
            <Heading fontSize="4xl" mx={3}>Gifinity</Heading>
            <ToggleButton />
          </HStack>
          <SearchInput />
        </VStack>
      ) : (
        <HStack gap={5} align="center">
          <Heading fontSize="3xl">
            <Link to="/">Gifinity</Link>
          </Heading>
          <SearchInput />
          <Spacer />
          <ToggleButton />
        </HStack>
      )}
    </Box>
  );
};

export default NavBar;
