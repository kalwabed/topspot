import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'

import theme from 'utils/theme'
import LayoutRoot from '~components/layout/layout-root'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <LayoutRoot>
        <Component {...pageProps} />
      </LayoutRoot>
    </ChakraProvider>
  )
}
