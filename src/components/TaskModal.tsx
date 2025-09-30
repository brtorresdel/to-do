import type { TaskModalProps } from "../types/task";
import TaskForm from "./TaskForm";
import TaskInfo from "./TaskInfo";
import type { Task } from "../types/task";


export default function TaskModal({taskID, hidden, closeModal}: TaskModalProps) {
    let task: Task | null = null;
    if (taskID) {
        const ls: string | null = localStorage.getItem('taskList');
        const taskList: Task[] = ls ? JSON.parse(ls) : [];
        task = taskList[taskID];
    }

    return (
        <div className={`transition duration-300 fixed inset-0 h-screen w-screen bg-black/60 z-10 flex justify-center pt-10 ${hidden ? "opacity-0 pointer-events-none" : "opacity-100"} `}>
            {!taskID ? <TaskForm task={task} closeModal={closeModal}/> : <TaskInfo task={task} closeModal={closeModal}/>}
        </div>
    )
}

