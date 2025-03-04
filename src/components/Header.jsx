import { useEffect } from "react";
import { PlaySquare, Plus} from 'lucide-react';

function Header() {
    return <div className="flex flex-row justify-evenly">
        <div
        className="font-cookie text-6xl text-font-light dark:text-font-dark">
            To-Do list!
        </div>
        <button 
        className="flex flex-row justify-center items-center text-2xl rounded-2xl pl-6 pr-6
        bg-add-light dark:bg-add-dark 
        text-font-light dark:text-font-dark
        drop-shadow-md">
            <Plus className="stroke-3"/> Nova Tarefa
        </button>
    </div>
}

export default Header;