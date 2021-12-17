import { ChakraProvider } from "@chakra-ui/react";
import { DefaultSeo } from "next-seo";
import type { AppProps } from "next/app";
import Head from "next/head";
import "@fontsource/lexend";
import { Provider } from "react-redux";

import defaultSeoConfig from "../../next-seo.config";
import Layout from "components/layout";
import customTheme from "styles/customTheme";
import "styles/globals.css";
import { store } from "redux/store";

function MyApp({
  Component,
  pageProps,
}: AppProps) {
  return (
      <ChakraProvider theme={customTheme}>
        <Head>
          <meta name="viewport" content="minimum-scale=1, maximum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover" />
        </Head>
        <DefaultSeo {...defaultSeoConfig} />
        <Provider store={store}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Provider>
      </ChakraProvider>
  );
}

export default MyApp;
