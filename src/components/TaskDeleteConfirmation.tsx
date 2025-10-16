import { Trash2 } from "lucide-react";
import type { Task } from "../types/task";
import Modal from "./tools/Modal";

export default function TaskDeleteConfirmation({task}: {task: Task | undefined}) {
    // TODO: adjust CSS
    // TODO: bring the delete task function from the app
    

    return  (
        <Modal>
            <div
            className={`w-1/2 h-fit rounded-md opacity-100 p-5 flex flex-col shadow-mg gap-4 bg-bg-light`}>
                <h3>Excluir tarefa {task?.title}</h3>
                <p>Tem certeza que deseja excluir esta tarefa?</p>
                <button>Excluir <Trash2 /></button>
                <button>Cancelar</button>
            </div>
        </Modal>
    )
}