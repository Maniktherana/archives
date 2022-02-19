import navStyles from '../styles/Nav.module.css'
import NextLink from 'next/link'
import { Link } from '@chakra-ui/react'
import ToggleColorMode from "./ToggleColorMode"

export const Nav = () => {
  return (
    <nav className={navStyles.nav}>
        <ul>
            <li className='home'>
              <NextLink href='/' passHref>
                <Link>Bradients</Link>
              </NextLink>
            </li>
            <li>
              <NextLink href='/' passHref>
                <Link href='/gradients'>Gradients</Link>
              </NextLink>
            </li>
            <li>
              <ToggleColorMode />
            </li>
        </ul>
    </nav>
  )
}

export default Nav
