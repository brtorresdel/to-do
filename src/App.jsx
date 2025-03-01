import { useState } from 'react';
import './App.css';

function App() {

  let [prefTheme, setPrefTheme] = useState('');

  function changeTheme() {
    if (prefTheme) {
      return setPrefTheme('')
    }

    return setPrefTheme('dark')
  }

  return (
    <div className={`w-screen h-screen bg-back-light ${prefTheme} dark:bg-back-dark flex justify-center p6 pt-6`}>
      <button onClick={changeTheme}>Troca</button>
      Hello World!
    </div>
  )
}

export default App
