import { Trash2 } from "lucide-react";
import type { Task } from "../types/task";
import Modal from "./tools/Modal";
import { TaskLS } from "../class/task";

export default function TaskDeleteConfirmation({task, close, hidden}: {task: Task | undefined, close: () => void, hidden: boolean}): React.ReactElement {
    // TODO: adjust CSS
    // TODO: bring the delete task function from the app
    
    const deleteTask = (task: Task) => {
        TaskLS.removeTask(task.id);
        close();
    }

    return  (
        hidden ? <Modal>
            <div
            className={`w-1/2 h-fit rounded-md opacity-100 p-5 flex flex-col shadow-mg gap-4 bg-bg-light`}>
                <h1 className="text-xl font-bold">Excluir tarefa {task?.title}</h1>
                <hr />
                <p>Tem certeza que deseja excluir esta tarefa?</p>
                <div className="flex justify-between">
                    <button
                    className="flex justify-center gap-2 bg-red-500 w-fit p-2.5 rounded-md text-font-dark hover:scale-105 transition duration-150 active:scale-95"
                    onClick={(task) => deleteTask(task)}>Excluir <Trash2 /></button>
                    <button
                    className="flex justify-center gap-2 bg-amber-800 w-fit p-2.5 rounded-md text-font-dark hover:scale-105 transition duration-150 active:scale-95"
                    onClick={close}>Cancelar</button>
                </div>
            </div>
        </Modal>
    : <></>)
}