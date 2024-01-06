import React from 'react'
import { createContext, useContext, useState } from 'react'

type ThemeType = {
  theme: string
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeType>({
  theme: 'light',
  toggleTheme: () => {},
})

export const ThemeContextProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  let storageTheme
  if (typeof window !== 'undefined') {
    storageTheme = localStorage.getItem('theme')
  }

  const [theme, setTheme] = useState(storageTheme ? storageTheme : 'light')

  const toggleTheme = () => {
    if (theme === 'dark') {
      localStorage.setItem('theme', 'light')
      setTheme('light')
    } else {
      localStorage.setItem('theme', 'dark')
      setTheme('dark')
    }
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useThemeContext() {
  return useContext(ThemeContext)
}
