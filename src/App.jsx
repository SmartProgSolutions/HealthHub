{/*import { Widget } from "./components/Widget"; */}
import DarkModeToggle from 'react-dark-mode-toggle'
import React, { useEffect, useState } from "react";

const getThemeFromStorage = () => {
  let theme = true
  if (localStorage.getItem('theme')) {
    theme = JSON.parse(localStorage.getItem('theme'))
  }
  return theme
}

export function App() {

  const [isDarkMode, setIsDarkMode] = useState(getThemeFromStorage())  
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.className = 'light-theme'
    } else {
      document.documentElement.className = 'dark-theme'
    }
    localStorage.setItem('theme', isDarkMode)
  }, [isDarkMode])

  return (
    <div>
       {/*<Widget /> */} 
        <DarkModeToggle
          className='toggler'
          size={50}
          onChange={setIsDarkMode}
          checked={isDarkMode}
        />
    </div>

  )
}

export default App ;
