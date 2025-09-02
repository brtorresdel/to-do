import './App.css'
import { useState, createContext } from 'react';
import ThemeSwitch from './components/ThemeSwitch';

type Theme = 'light' | 'dark';
const ThemeContext = createContext<Theme>('light');

function App() {
  const [theme, setTheme] = useState<Theme>('light');

  return (
    <ThemeContext value={theme}>
      <div className={`h-screen w-screen bg-bg-${theme}`}>
        <header>
          <ThemeSwitch />
        </header>
      </div>
    </ThemeContext>
  )
}

export default App
