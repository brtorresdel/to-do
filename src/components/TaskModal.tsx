import type { TaskInfoProps } from "../types/task";
import TaskForm from "./TaskForm";
import TaskInfo from "./TaskInfo";


export default function TaskModal({taskID, hidden}: {taskID: TaskInfoProps, hidden: boolean}) {

    return (
        <div className={`fixed inset-0 h-screen w-screen bg-black/60 z-10 flex justify-center pt-10 ${hidden ? "hidden" : ""}`}>
            {!taskID ? <TaskForm taskID={taskID}/> : <TaskInfo taskID={taskID}/>}
        </div>
    )
}

