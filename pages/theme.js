import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const theme = {
    config: {
        initialColorMode: "dark",
        useSystemColorMode: true
    },
    styles: {
        global: props => ({
            body: {
                color: mode('gray.800', 'whiteAlpha.900')(props),
                bg: mode('gray.100', '#141214')(props),
                "padding": "0",
                "margin": "0",
                "font-family": "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
              },
              
              a: {
                "color": "inherit",
               "text-decoration": "none",
              }
              
              * {
                "box-sizing": "border-box"
              }
              
        })
    }
}

export default extendTheme(theme)