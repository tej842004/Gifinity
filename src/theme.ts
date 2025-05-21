import {
  extendTheme,
  type ThemeConfig,
  type ThemeOverride,
} from "@chakra-ui/react";
import "@fontsource/dancing-script/700.css";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const fonts = {
  heading: '"Dancing Script", cursive',
  body: `'Inter', sans-serif`,
};

const theme: ThemeOverride = extendTheme({
  config,
  fonts,
});

export default theme;
