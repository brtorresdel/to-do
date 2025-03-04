import { useState } from 'react';
import './App.css';
import SwitchThemeMode from './components/SwitchThemeMode';
import Header from './components/Header';
import Tasks from './components/Tasks';
import FinishedTasks from './components/FinishedTasks';

function App() {

  let [prefTheme, setPrefTheme] = useState('');

  function changeAppTheme() {
    if (prefTheme) {
      return setPrefTheme('')
    }

    return setPrefTheme('dark')
  }

  return (
    <div className={`w-screen h-screen bg-back-light ${prefTheme} dark:bg-back-dark flex-col`}>
      <SwitchThemeMode onChangeAppTheme={changeAppTheme}/>
      <Header />
      <Tasks />
      <FinishedTasks />
    </div>
  )
}

export default App
