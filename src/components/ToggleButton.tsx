import { IconButton, useColorMode } from "@chakra-ui/react";
import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";

const ToggleButton = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <IconButton
      aria-label="light or dark mode button"
      icon={colorMode === "dark" ? <CiLight /> : <MdDarkMode />}
      variant="ghost"
      borderRadius="full"
      onClick={toggleColorMode}
      size="md"
    />
  );
};

export default ToggleButton;
