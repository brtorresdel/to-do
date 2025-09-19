import NewTaskForm from "./NewTaskForm"
import TaskInfo from "./TaskInfo"


export default function TaskModal() {
    return (
        <div className="fixed inset-0 h-screen w-screen bg-black/60 z-10 flex justify-center pt-10">
            <NewTaskForm />
            <TaskInfo />
        </div>
    )
}

