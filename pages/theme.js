import { extendTheme } from '@chakra-ui/react'

const theme = {
    config: {
        initialColorMode: "dark",
        useSystemColorMode: true
    },
    styles: {
        global: {
            body: {
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
              
        }
    }
}

export default extendTheme(theme)