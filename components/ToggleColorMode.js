import { Button, useColorMode } from "@chakra-ui/react"
import { SunIcon, MoonIcon } from "@chakra-ui/icons"

export const ToggleColorMode = () => {
    const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Button onClick={() => toggleColorMode()}>{colorMode === "dark" ? <SunIcon/> : <MoonIcon/>}</Button>
  )
}

export default ToggleColorMode