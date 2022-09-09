import React, { useEffect, useState } from 'react'
import { ThemeProvider as StyledCompThemeProvider } from "styled-components";
import getTheme from '../styles/themes'

// eslint-disable-next-line no-unused-vars
export const CustomThemeContext = React.createContext(
	{
		currentTheme: 'light',
		setTheme: null,
	},
)

const ThemeProvider = (props) => {
	// eslint-disable-next-line react/prop-types
	const { children } = props

	// Read current theme from localStorage or maybe from an api
	// State to hold the selected theme name
	const [themeName, setStateThemeName] = useState('dark')

	// Retrieve the theme object by theme name
	const theme = getTheme(themeName)

	useEffect(() => {
		const currentTheme = localStorage.getItem('appTheme') || 'dark'
		setThemeName(currentTheme);
	}, [])

	// Wrap _setThemeName to store new theme names in localStorage
	const setThemeName = (name) => {
		localStorage.setItem('appTheme', name)
		setStateThemeName(name)
	}

	const contextValue = {
		currentTheme: themeName,
		setTheme: setThemeName,
	}

	return (
		<CustomThemeContext.Provider value={contextValue}>
			<StyledCompThemeProvider theme={theme}>
				{children}
			</StyledCompThemeProvider>
		</CustomThemeContext.Provider>
	)
}

export default ThemeProvider