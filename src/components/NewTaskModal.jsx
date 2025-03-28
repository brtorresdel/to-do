import { X } from 'lucide-react'

function NewTaskModal() {
    return <div className="w-full h-full bg-stone-950/50 absolute flex justify-center items-center" aria-modal='true'>
        <div className=" w-2xl h-2xl
        bg-task-light dark:bg-task-dark shadow-lg rounded-md">
            <div className="bg-newTask-bar-light dark:bg-newTask-bar-dark rounded-tl-md rounded-tr-md flex flex-row justify-between items-center p-3">
                <p>Nova tarefa</p>
                <div>
                    <button>Adicionar</button>
                    <button><X /></button>
                </div>
            </div>
            <div className="flex flex-col">
                <label htmlFor="name">Nome da tarefa (obrigatório)</label>
                <input type="text" name="name" id="" />
                <label htmlFor="description">Descrição</label>
                <input type="text" name="description" id="" />
                <label htmlFor="deadline">Prazo</label>
                <input type="text" name="deadline" id="" />
                <input type="text" placeholder='Observações'/>
            </div>
        </div>
    </div>
}

export default NewTaskModal