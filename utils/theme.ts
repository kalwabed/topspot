import { extendTheme, theme as ChakraTheme } from '@chakra-ui/react'

const fonts = {
  ...ChakraTheme.fonts,
  body: 'InterVariable, sans-serif',
  heading: 'InterVariable, sans-serif'
}

const customGlobalStyles = {
  'body, html': {
    height: '100%'
  },
  '#__next': {
    height: '100%',
    isolation: 'isolate'
  }
}

const theme = extendTheme({
  fonts,
  styles: { global: customGlobalStyles }
})

export default theme
