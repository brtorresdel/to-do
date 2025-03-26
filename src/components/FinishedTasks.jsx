import { Check } from 'lucide-react';

function FinishedTasks() {
    return <div className=' w-2xl'>
        <button className='w-full rounded-md p-3 shadow-md font-noto-sans
        flex flex-row  justify-center items-center gap-2
        bg-add-light text-font-light dark:bg-add-dark dark:text-font-dark
        duration-300 ease-out hover:scale-105 active:scale-95'>
            Tarefas finalizadas <Check />
        </button>
    </div>
}

export default FinishedTasks;