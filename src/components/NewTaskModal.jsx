import { X } from 'lucide-react'

function DataInput({ name, label }) {
    return <div className="flex flex-col gap-2 p-3">
        <label 
        className='text-lg'
        htmlFor={name}>{label}</label>
        <input 
        className='bg-label-bg-light dark:bg-label-bg-dark rounded-md shadow-inner p-1'
        type="text" name={name} id="" />
    </div>
}

function NewTaskModal() {
    return <div className="hidden w-full h-full bg-stone-950/50 absolute flex justify-center items-center" aria-modal='true'>
        <div className=" w-2xl h-2xl
        bg-task-light dark:bg-task-dark shadow-lg rounded-md">
            <div className="bg-newTask-bar-light dark:bg-newTask-bar-dark rounded-tl-md rounded-tr-md flex flex-row justify-between items-center p-3
            font-noto-sans">
                <p className='text-xl'>Nova tarefa</p>
                <div className='flex flex-row gap-4'>
                    <button className='bg-add-light dark:bg-add-dark text-font-light dark:text-font-dark p-2 rounded-md duration-300 hover:scale-105 active:scale-95 text-xl'>
                        Adicionar
                    </button>
                    <button className='stroke-font-light dark:stroke-font-dark hover:scale-105 active:scale-95 duration-300'>
                        <X className="size-9"/>
                    </button>
                </div>
            </div>
            <div className='font-noto-sans'>
                <DataInput name='taskName' label='Nome da Tarefa (obrigatório)'/>
                <DataInput name='description' label='Descrição'/>
                <DataInput name='deadline' label='Prazo'/>
                <DataInput name='observations' label='Observações'/>
            </div>
        </div>
    </div>
}

export default NewTaskModal