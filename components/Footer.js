import { Image, useColorMode } from '@chakra-ui/react'
import footerStyles from '../styles/Footer.module.css'

export const Footer = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <footer className={footerStyles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Deployed on{' '}
          <span className={footerStyles.logo}>
          {colorMode === "dark" ?
          <Image src="/vercel-logotype-light.svg" alt="Vercel Logo Light" boxSize='60px' ml={2} /> :
          <Image src="/vercel-logotype-dark.svg" alt="Vercel Logo Dark" boxSize='60px' ml={2} />}
          </span>
        </a>
      </footer>
  )
}

export default Footer
