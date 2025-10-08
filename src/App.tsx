import './App.css'
import { useEffect, useState} from 'react';
import { type Theme, ThemeContext } from './context/Theme';
import ThemeSwitch from './components/ThemeSwitch';
import NewTaskBtn from './components/NewTaskBtn';
import TaskList from './components/TaskList';
import FinishedTasksBtn from './components/FinishedTasksBtn';
import { TaskLS } from './class/task';
import { type Task } from './types/task';
import TaskForm from './components/TaskForm';
import TaskInfo from './components/TaskInfo';


function App() {
  const [theme, setTheme] = useState<Theme>('light');
  const changeTheme = () => setTheme(theme === "light" ? "dark" : "light");
  const themeBg: string = theme === 'light' ? "bg-bg-light" : "bg-bg-dark";
  const textTheme: string = theme === 'light' ? "text-font-light" : "text-font-dark";

  const [taskFormVisibility, setTaskFormVisibility] = useState<boolean>(false);
  const [taskInfoVisibility, setTaskInfoVisibility] = useState<boolean>(false);

  const [taskList, setTaskList] = useState<Task[]>(TaskLS.getList());
  const [taskInfo, setTaskInfo] = useState<Task | undefined>(undefined);

  const changeTaskFormView = () => {
    if (taskFormVisibility) setTaskInfo(undefined);
    setTaskFormVisibility(!taskFormVisibility)
  }; 
  
  const changeTaskInfoView = () => setTaskInfoVisibility(!taskInfoVisibility);

  const viewTask = (task: Task) => {
    setTaskInfo(task);
    changeTaskInfoView();
  }

  const openEditTask = (task: Task) => {
    setTaskInfo(task);
    if (taskInfoVisibility)  changeTaskInfoView();
    changeTaskFormView();
  }

  useEffect(() => {
    setTaskList(TaskLS.getList());
  }, [taskFormVisibility]);

  return (
    <ThemeContext.Provider value={{theme, changeTheme}}>
      <div className={`h-screen w-screen ${themeBg} flex-column justify-items-center`}>
        <header className='w-full h-1/16 p-5 mb-10 content-center justify-items-end'>
          <ThemeSwitch />
        </header>
        
        <div className=' w-1/2 flex flex-col'>
          <div className='h-auto w-full flex flex-row items-center justify-between '>
            <h1 className={`font-title text-5xl ${textTheme}`}>To-do list!</h1>
            <NewTaskBtn onClick={changeTaskFormView}/>
          </div>
        </div>

        <TaskList tasks={taskList} 
        viewTask={(task: Task) => 
        viewTask(task)} 
        editTask={(task: Task) => openEditTask(task)}
        deleteTask={() => {}}/>
        
        <div className=' w-1/2 flex flex-col'>
          <FinishedTasksBtn />
        </div>
        
        <TaskForm task={taskInfo} close={changeTaskFormView} hidden={taskFormVisibility}/>
        <TaskInfo task={taskInfo} close={changeTaskInfoView} hidden={taskInfoVisibility}/>
      </div>
    </ThemeContext.Provider>
  )
}

export default App
