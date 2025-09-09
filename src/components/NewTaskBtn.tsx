import { Plus } from "lucide-react";
import { useContext, useState } from "react";
import { ThemeContext, type ThemeContextType } from "../context/Theme";

interface css {
    bg: string;
    textColor: string;
}



export default function NewTaskBtn() {
    const {theme}: ThemeContextType = useContext(ThemeContext); 

    const btnCss: css = {
        bg: theme === "light" ? "bg-new-task-light" : "bg-new-task-dark",
        textColor: theme === "light" ? "text-font-light" : "text-font-dark",
    }

    return <button 
    className={`${btnCss.bg} h-auto w-2/6 flex flex-row justify-center-safe gap-2`}>
        <p className={`${btnCss.textColor}`}>Nova Tarefa</p> 
        <Plus/>
    </button>
}