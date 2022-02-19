import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Layout.module.css'
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
      <Head>
        <title>Bradients</title>
        <meta name="keywords" content="gradient, gradients" />
      </Head>
      <Heading as='h1' size='4xl'>big beautiful gradients</Heading>
      <p></p>
      
    </div>
  )
}
