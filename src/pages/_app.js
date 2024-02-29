import Head from "next/head";
import { Provider } from "react-redux"
import store from '../redux/store';
import { ChakraProvider } from '@chakra-ui/react';

import "../styles/globals.css";
import Header from "../components/header";

const MyApp = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>Dil-Foods</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="preconnect" href="https://stijndv.com" />
      <link
        rel="stylesheet"
        href="https://stijndv.com/fonts/Eudoxus-Sans.css"
      />
    </Head>

    <ChakraProvider>
      <Provider store={store}>
        <Header/>
        {/* Render your component */}
        <Component {...pageProps} />
      </Provider>
    </ChakraProvider>
  </>
);

export default MyApp;
