import { Plus } from "lucide-react";
import { useContext } from "react";
import { ThemeContext, type ThemeContextType } from "../context/Theme";
import type { btnCss } from "../types/cssDecoration";

type NewTaskBtnProps = { onClick: () => void }

export default function NewTaskBtn({onClick}: NewTaskBtnProps) {
    const {theme}: ThemeContextType = useContext(ThemeContext); 

    const btnCss: btnCss = {
        bg: theme === "light" ? "bg-new-task-light" : "bg-new-task-dark",
        textColor: theme === "light" ? "text-font-light" : "text-font-dark",
        svgColor: theme === "light" ? "#2a2b2a" : "#f8f8f8"
    }

    return <button 
    className={`${btnCss.bg} h-auto w-3/8 p-3 rounded-lg flex flex-row justify-center-safe gap-2
    hover:scale-105 hover:drop-shadow-xl active:scale-95 transition duration-150`}
    onClick={onClick}>
        <p className={`${btnCss.textColor} text-xl`}>Nova Tarefa</p> 
        <Plus color={`${btnCss.svgColor}`} size={25}/>
    </button>
}