import Layout from '../components/Layout'
import { ChakraProvider } from '@chakra-ui/react'
import theme from "./theme"
import { ColorModeScript } from "@chakra-ui/color-mode"

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode}/>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
    )
}

export default MyApp
