import '@fontsource/inter/variable-full.css'
import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'
import { ChakraProvider } from '@chakra-ui/react'
import Head from 'next/head'

import theme from 'utils/theme'
import LayoutRoot from '~components/layout/layout-root'

export default function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <title>TopSpot</title>
      </Head>
      <SessionProvider session={session}>
        <LayoutRoot>
          <Component {...pageProps} />
        </LayoutRoot>
      </SessionProvider>
    </ChakraProvider>
  )
}
