import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { AppContextProvider } from '@/context/appContext';
import { Layout } from '@/components';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <AppContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AppContextProvider>
    </ChakraProvider>
  );
}
