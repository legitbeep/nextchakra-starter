import { ChakraProvider } from "@chakra-ui/react";
import { DefaultSeo } from "next-seo";
import type { AppProps } from "next/app";
import Head from "next/head";
import "@fontsource/lexend";

import defaultSeoConfig from "../../next-seo.config";
import Layout from "components/layout";
import customTheme from "styles/customTheme";
import "styles/globals.css";

function MyApp({
  Component,
  pageProps,
}: AppProps) {
  return (
      <ChakraProvider theme={customTheme}>
        <Head>
          <meta name="viewport" content="" />
        </Head>
        <DefaultSeo {...defaultSeoConfig} />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
  );
}

export default MyApp;
