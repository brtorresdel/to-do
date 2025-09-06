import './App.css'
import { useState } from 'react';
import ThemeSwitch from './components/ThemeSwitch';
import { type Theme, ThemeContext } from './context/Theme';

function App() {
  const [theme, setTheme] = useState<Theme>('light');

  const changeTheme = () => setTheme(theme === "light" ? "dark" : "light");

  const themeName: string = theme === 'light' ? "bg-bg-light" : "bg-bg-dark";

  return (
    <ThemeContext.Provider value={{theme, changeTheme}}>
      <div className={`h-screen w-screen ${themeName}`}>
        <header className='w-full h-1/16 p-5 content-center justify-items-end'>
          <ThemeSwitch />
        </header>
      </div>
    </ThemeContext.Provider>
  )
}

export default App
