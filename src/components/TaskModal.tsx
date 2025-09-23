import type { TaskInfoProps, TaskModalProps } from "../types/task";
import TaskForm from "./TaskForm";
import TaskInfo from "./TaskInfo";


export default function TaskModal({taskID, hidden, closeModal}: TaskModalProps) {
    return (
        <div className={`transition duration-300 fixed inset-0 h-screen w-screen bg-black/60 z-10 flex justify-center pt-10 ${hidden ? "opacity-0 pointer-events-none" : "opacity-100"} `}>
            {!taskID ? <TaskForm taskID={taskID} closeModal={closeModal}/> : <TaskInfo taskID={taskID} closeModal={closeModal}/>}
        </div>
    )
}

