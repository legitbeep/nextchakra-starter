import { ChakraProvider } from "@chakra-ui/react";
import { EmotionCache } from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import { DefaultSeo } from "next-seo";
import type { AppProps } from "next/app";
import Head from "next/head";
import "@fontsource/lexend";

import defaultSeoConfig from "../../next-seo.config";
import Layout from "components/layout";
import createEmotionCache from "styles/createEmotionCache";
import customTheme from "styles/customTheme";
import "styles/globals.css";

const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

function MyApp({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache,
}: MyAppProps) {
  return (
    <CacheProvider value={emotionCache}>
      <ChakraProvider theme={customTheme}>
        <Head>
          <meta name="viewport" content="" />
        </Head>
        <DefaultSeo {...defaultSeoConfig} />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </CacheProvider>
  );
}

MyApp.defaultProps = {
  emotionCache: clientSideEmotionCache,
};

export default MyApp;
