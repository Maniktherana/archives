import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Box,
    chakra,
    Text,
    Stack,
    Button,
    Icon,
    Flex,
    Heading,
    useColorMode,
    useColorModeValue,
 } from '@chakra-ui/react'
 import { motion, MotionProps } from "framer-motion"

export default function Home() {
  const { toggleColorMode } = useColorMode()
  const formBackground = useColorModeValue("gray.100", "gray.700")
  return (
    <div>
      <Button onClick={toggleColorMode}>Toggle Color Mode</Button>
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Deployed on{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
