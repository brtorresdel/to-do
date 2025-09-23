import './App.css'
import { useState, type SetStateAction } from 'react';
import { type Theme, ThemeContext } from './context/Theme';
import ThemeSwitch from './components/ThemeSwitch';
import NewTaskBtn from './components/NewTaskBtn';
import TaskList from './components/TaskList';
import FinishedTasksBtn from './components/FinishedTasksBtn';
import TaskModal from './components/TaskModal';

function App() {
  const [theme, setTheme] = useState<Theme>('light');
  const changeTheme = () => setTheme(theme === "light" ? "dark" : "light");
  const themeBg: string = theme === 'light' ? "bg-bg-light" : "bg-bg-dark";
  const textTheme: string = theme === 'light' ? "text-font-light" : "text-font-dark";

  const [modalHiddenView, setModalHiddenView] = useState<boolean>(true);
  const [taskID, setTaskID] = useState<number | null>(null);
  const newTaskForm = () => setModalHiddenView(false);

  const closeModal = () => setModalHiddenView(true);

  const taskInfoForm = (taskID: number) => {
    setTaskID(taskID);
    setModalHiddenView(false);
  };

  return (
    <ThemeContext.Provider value={{theme, changeTheme}}>
      <div className={`h-screen w-screen ${themeBg} flex-column justify-items-center`}>
        <header className='w-full h-1/16 p-5 mb-10 content-center justify-items-end'>
          <ThemeSwitch />
        </header>
        
        <div className=' w-1/2 flex flex-col'>
          <div className='h-auto w-full flex flex-row items-center justify-between '>
            <h1 
              className={`font-title text-5xl ${textTheme}`}>To-do list!</h1>
              <NewTaskBtn onClick={newTaskForm} />
          </div>
        </div>

        <TaskList />
        
        <div className=' w-1/2 flex flex-col'>
          <FinishedTasksBtn />
        </div>
      </div>
      <TaskModal taskID={taskID} hidden={modalHiddenView} closeModal={closeModal}/>
    </ThemeContext.Provider>
  )
}

export default App
