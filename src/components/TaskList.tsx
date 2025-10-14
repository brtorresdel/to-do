import { ThemeContext, type ThemeContextType } from "../context/Theme";
import { Check } from "lucide-react";
import { useContext } from "react";
import ActionBtn from "./tools/ActionBtn";
import StatusInfo from "./tools/StatusInfo";
import type { Task, TaskStatus } from '../types/task';
import type { taskListCss } from '../types/cssDecoration';

export default function TaskList({tasks}: {tasks: Task[]}): React.ReactElement {

    const {theme}: ThemeContextType = useContext(ThemeContext);
    // TODO: adjust the div to have a min height

    return (
        <div className="w-1/2 pb-3">
            {tasks.length > 0 ?
                <ul className="flex-col">{tasks.map(currentTask => <TaskListItem 
                                                                    task={currentTask} 
                                                                    theme={theme}/>)}</ul> :
                <div className="p-8 flex justify-center">
                    <p className={`${theme === "light" ? "text-font-light" : "text-font-dark"}`}>Nenhuma tarefa cadastrada &#128531;</p>
                </div>
            }
        </div>
    )
}

function TaskListItem({ task, theme }: { task: Task, theme: string }): React.ReactElement {

    const today = new Date();
    const deadlineDate = task.deadline ? new Date(task.deadline) : null;

    const status: TaskStatus = task.finished ? 4 :
    !task.deadline ? 1 : 
    deadlineDate && today.getTime() > deadlineDate.getTime() ? 3 
    : 2;

    const taskListCss: taskListCss = {
        bg: theme === "light" ? "bg-task-info-light" : "bg-task-info-dark",
        text: theme === "light" ? "text-font-light" : "text-font-dark",
        border: theme === "light" ? "hover:border-blue-400" : "hover:border-border-dark",
        check: theme === "light" ? "border-font-light" : "border-font-dark"
    }

    return <li key={task.id} 
    className={`${taskListCss.bg} w-full h-fit p-3 mt-3 rounded-md
    flex flex-row justify-between items-center
    transition duration-150 ${taskListCss.border} hover:scale-101 border-2 border-transparent`}>
        <div className="flex flex-row items-center gap-2">
            <div className={`bg-transparent border-2 rounded-md w-6 h-6 flex content-center items-center
                ${theme === "light" ? "border-font-light" : "border-font-dark"}`}>
                <Check 
                className={`opacity-0 hover:opacity-50 transition duration-150
                ${theme === "light" ? "stroke-font-light" : "stroke-font-dark"}`}/>
            </div>
            <p 
            className={`hover:underline hover:cursor-pointer ${taskListCss.text}`}
            onClick={(e: React.MouseEvent<HTMLParagraphElement>) => seeTask(e, task)}>{task.title}</p> 
            <StatusInfo status={ status }/>
        </div>
        <div>
            <ActionBtn task={task}/>
        </div>
    </li>
}