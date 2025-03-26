import { useEffect } from "react";
import { Plus } from 'lucide-react';

function Header() {
    return <div className="w-2xl
        flex flex-row justify-between">
        <div
        className="font-cookie font-medium 
        text-font-light dark:text-font-dark
        text-4xl md:text-6xl
        duration-300 ease-out
        ">
            To-Do list!
        </div>
        <button 
        className="flex flex-row justify-evenly items-center  
        text-md pl-4 pr-4 rounded-[2vw] gap-2
        md:text-2xl md:pl-6 md:pr-6 md:rounded-2xl
        bg-add-light dark:bg-add-dark 
        text-font-light dark:text-font-dark
        drop-shadow-md duration-300 ease-out hover:scale-105 active:scale-95">
            <Plus className="size-sm stroke-1.5 md:size-md md:stroke-3"/>
            <p>Nova Tarefa</p>
        </button>
    </div>
}

export default Header;