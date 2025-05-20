import {
  extendTheme,
  type ThemeConfig,
  type ThemeOverride,
} from "@chakra-ui/react";
import "@fontsource/pacifico";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const fonts = {
  heading: `'Pacifico', cursive`,
  body: `'Inter', sans-serif`,
};

const theme: ThemeOverride = extendTheme({
  config,
  fonts,
});

export default theme;
