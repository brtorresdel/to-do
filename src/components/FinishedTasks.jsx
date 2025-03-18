import { Check } from 'lucide-react';

function FinishedTasks() {
    return <div className='w-2xl rounded-md p-3
    flex flex-row  justify-center items-center gap-2
    bg-add-light text-font-light dark:bg-add-dark dark:text-font-dark'>
        Tarefas finalizadas <Check />
    </div>
}

export default FinishedTasks;