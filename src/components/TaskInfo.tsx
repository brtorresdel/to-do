import { X } from "lucide-react";
import ActionBtn from "./tools/ActionBtn";
import { ThemeContext, type ThemeContextType } from "../context/Theme";
import { useContext } from "react";
import type { taskInfoCss } from "../types/cssDecoration";
import type { TaskInfoProps } from "../types/task";



export default function TaskInfo( {taskID}: TaskInfoProps ) {
    // TODO: add props with the task info
    // TODO: create the function to close the modal

    const { theme }: ThemeContextType = useContext(ThemeContext);

    const taskInfoCss: taskInfoCss = {
        bg: theme === "light" ? "bg-bg-light" : "bg-bg-dark",
        text: theme === "light" ? "text-font-light" : "text-font-dark"
    }

    return <div className={`w-1/2 h-fit rounded-md opacity-100 p-5 flex flex-col shadow-mg gap-4 
    ${taskInfoCss.bg} hidden`}>
        <div className="flex flex-row flex-nowrap justify-between">
            <h1 className={`text-2xl font-bold ${taskInfoCss.text}`}>Título da tarefa</h1>
            <div className="group relative">
                <X className="hover:scale-130 transform duration-150"/>
                <span className="absolute -top-7 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition duration-300 pointer-events-none z-10">
                    Fechar
                </span>
            </div>
        </div>
        <hr className={`${taskInfoCss.text}`}/>
        <div className="flex flex-col gap-3">
            <div>
                <Content title="Descrição" description="Descrição do teste 1" theme={taskInfoCss}/>
            </div>
            <div>
                <Content title="Observações" description="Descrição do teste 1" theme={taskInfoCss}/>
            </div>
            <div>
                <Content title="Prazo" description="Descrição do teste 1" theme={taskInfoCss}/>
            </div>
        </div>
        <div className="flex flex-row justify-center scale-130">
            <ActionBtn taskId={taskID} theme={theme}/>
        </div>
    </div>
}

function Content({ title, description, theme }: {title: string, description: string, theme: taskInfoCss}) {
    return <div>
        <h1 className={`font-bold ${theme.text}`}>{title}</h1>
        <p className={`${theme.text}`}>{description}</p>
    </div>
}