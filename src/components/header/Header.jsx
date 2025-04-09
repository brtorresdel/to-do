import { useEffect } from "react";
import { Plus } from 'lucide-react';
import { general, title, btnNewTask } from "./headerStyle";


function Header() {
    return <div className={general}>
        <div
        className={title}>
            To-Do list!
        </div>
        <button 
        className={btnNewTask}>
            <Plus className="size-sm stroke-1.5 md:size-md md:stroke-3"/>
            <p>Nova Tarefa</p>
        </button>
    </div>
}

export default Header;