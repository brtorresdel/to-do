import { ThemeContext, type ThemeContextType } from "../context/Theme";
import { useContext } from "react";
import { Check } from "lucide-react";

interface css {
    bg: string;
    textColor: string;
    svgColor: string;
}


export default function FinishedTasksBtn() {

    const {theme}: ThemeContextType = useContext(ThemeContext); 
    
    const btnCss: css = {
        bg: theme === "light" ? "bg-new-task-light" : "bg-new-task-dark",
        textColor: theme === "light" ? "text-font-light" : "text-font-dark",
        svgColor: theme === "light" ? "#2a2b2a" : "#f8f8f8"
    }

    return(
        <button className={`${btnCss.bg} h-auto w-full p-3 rounded-lg flex flex-row justify-center-safe gap-2
        hover:scale-105 hover:drop-shadow-xl active:scale-95 transition duration-150`}>
            <span className={`${btnCss.textColor}`}>Exibir tarefas finalizadas</span> <Check color={`${btnCss.svgColor}`}/>
        </button>
    )
}