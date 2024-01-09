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
  let initialTheme
  if (typeof window !== 'undefined') {
    initialTheme = localStorage.getItem('theme')
  }

  const [theme, setTheme] = useState(initialTheme ?? 'light')

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)

    document.documentElement.dataset.theme = newTheme

    window.localStorage.setItem('theme', newTheme)
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
