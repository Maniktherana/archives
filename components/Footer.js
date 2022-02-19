import { Image } from '@chakra-ui/react'
import footerStyles from '../styles/Footer.module.css'

export const Footer = () => {
  return (
    <footer className={footerStyles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Deployed on{' '}
          <span className={footerStyles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" boxSize='60px' ml={2} />
          </span>
        </a>
      </footer>
  )
}

export default Footer
