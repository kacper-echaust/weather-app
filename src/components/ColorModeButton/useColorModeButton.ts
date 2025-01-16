import { useState } from 'react'
const useColorModeButton = () => {
	const [colorMode, setColorMode] = useState(false)

	const changeColorMode = () => {
		setColorMode(prevColorMode => !prevColorMode)
	}
	return { changeColorMode, colorMode }
}
export { useColorModeButton }
