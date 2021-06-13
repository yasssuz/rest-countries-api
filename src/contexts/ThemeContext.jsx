import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext({})

export const ThemeProvider = ({ children }) => {
  const [lightTheme, setLightTheme] = useState(false)

  function handleTheme() {
    setLightTheme(prevState => !prevState)
  }

  function getTheme() {
    let theme;

    if (localStorage.getItem('theme') == null) {
      localStorage.setItem('theme', 'dark')
      theme = 'dark'
    } else if (localStorage.getItem('theme') === 'dark') {
      theme = 'dark'
    } else if (localStorage.getItem('theme') === 'light') {
      theme = 'light'
    }

    return theme
  }

  function storeTheme(theme) {
    localStorage.setItem('theme', theme)
  }

  useEffect(() => {
    const theme = getTheme()

    if (theme === 'light') {
      handleTheme()
      document.querySelector('html').classList.remove('dark')
    }
  }, [])

  return (
    <ThemeContext.Provider value={{
      storeTheme,
      getTheme,
      handleTheme,
      lightTheme,
    }}>
      {children}
    </ThemeContext.Provider>
  )
}