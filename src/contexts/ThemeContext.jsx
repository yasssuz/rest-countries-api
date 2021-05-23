import { createContext, useState } from 'react'

export const ThemeContext = createContext({})

export function ThemeProvider(props) {
  const { children } = props
  const [darkTheme, setDarkTheme] = useState(true)

  return (
    <ThemeContext.Provider value={{
      darkTheme,
      setDarkTheme
    }}>
      {children}
    </ThemeContext.Provider>
  )
}