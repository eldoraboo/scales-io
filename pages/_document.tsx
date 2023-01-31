import { ColorModeScript } from "@chakra-ui/react";
import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import { extendTheme, ThemeConfig } from "@chakra-ui/react";

export default function Document() {
  // 1. import `extendTheme` function

  // 2. Add your color mode config
  const config: ThemeConfig = {
    initialColorMode: "light",
    useSystemColorMode: false,
  };

  // 3. extend the theme
  const theme = extendTheme({ config });

  return (
    <Html lang="en">
      <Head />
      <body>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
