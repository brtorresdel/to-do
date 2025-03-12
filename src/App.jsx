import { useState } from 'react';
import './App.css';
import SwitchThemeMode from './components/SwitchThemeMode';
import Header from './components/Header';
import TaskList from './components/Tasks';
import FinishedTasks from './components/FinishedTasks';
import uuid from 'uuid4';

function App() {

  const [tasks, setTasks] = useState([
    {
      id: uuid(),
      title: 'Teste 1',
      description: 'Descrição do teste 1',
      hasDeadline: false,
      deadline: null,
      observations: 'Observações do teste 1'
    },
    {
      id: uuid(),
      title: 'Teste 2',
      description: 'Descrição do teste 2',
      hasDeadline: true,
      deadline: '06/06/2025',
      observations: 'Observações do teste 2'
    },
    {
      id: uuid(),
      title: 'Teste 3',
      description: 'Descrição do teste 3',
      hasDeadline: true,
      deadline: '01/03/2025',
      observations: 'Observações do teste 3'
    },
  ]);

  let [prefTheme, setPrefTheme] = useState('');

  function changeAppTheme() {
    if (prefTheme) {
      return setPrefTheme('')
    }

    return setPrefTheme('dark')
  }

  return (
    <div className={`w-screen h-screen bg-back-light ${prefTheme} dark:bg-back-dark 
    flex flex-col items-center
    gap-6`}>
      <SwitchThemeMode onChangeAppTheme={changeAppTheme}/>
      <Header />
      <TaskList tasks={tasks} />
      <FinishedTasks />
    </div>
  )
}

export default App
