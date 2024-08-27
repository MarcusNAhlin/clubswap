import "@mantine/core/styles.css";
import React from "react";
import { MantineProvider, ColorSchemeScript, Flex } from "@mantine/core";
import { theme } from "../theme";
import SessionWrapper from "components/SessionWrapper";
import { Navbar } from "components/Navbar";

export const metadata = {
  title: "ClubSwap",
  description: "Marketplace to sell used golf-gear!",
};

export default function RootLayout({ children }: { children: any }) {
  return (
    <SessionWrapper>
      <html lang="en">
        <head>
          <ColorSchemeScript />
          <link rel="shortcut icon" href="/favicon.svg" />
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
            />
        </head>
        <body>
          <MantineProvider theme={theme}>
            <Flex mih={"100vh"} mah={"100vh"} style={{
              overflow: 'hidden'
            }}>
              <Navbar />
              <div style={{
                overflow: "scroll"
              }}>
                {children}
              </div>
            </Flex>
          </MantineProvider>
        </body>
      </html>
    </SessionWrapper>
  );
}
