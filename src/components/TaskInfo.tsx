import { X } from "lucide-react";
import ActionBtn from "./tools/ActionBtn";
import { ThemeContext, type ThemeContextType } from "../context/Theme";
import { useContext } from "react";
import type { taskInfoCss } from "../types/cssDecoration";
import type { Task } from "../types/task";
import Modal from "./tools/Modal";



export default function TaskInfo( {task, close, hidden}: {task: Task | undefined, close: () => void, hidden: boolean} ): React.ReactElement {
    // TODO: add props with the task info
    // TODO: change the CSS to include dark mode

    const { theme }: ThemeContextType = useContext(ThemeContext);

    const taskInfoCss: taskInfoCss = {
        bg: theme === "light" ? "bg-bg-light" : "bg-bg-dark",
        text: theme === "light" ? "text-font-light" : "text-font-dark"
    }

    return (
        hidden ? (
            <Modal>
                <div className={`w-1/2 h-fit rounded-md opacity-100 p-5 flex flex-col shadow-mg gap-4 
                ${taskInfoCss.bg}`}>
                    <div className="flex flex-row flex-nowrap justify-between">
                        <h1 className={`text-2xl font-bold ${taskInfoCss.text}`}>{task ? task.title : ""}</h1>
                        <div className="group relative">
                            <X className="hover:scale-130 transform duration-150" onClick={close}/>
                            <span 
                            className="absolute -top-7 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition duration-300 pointer-events-none z-10">
                                Fechar
                            </span>
                        </div>
                    </div>
                    <hr className={`${taskInfoCss.text}`}/>
                    <div className="flex flex-col gap-3">
                        <Content title="Descrição" description={task && task.description ? task.description : ""} theme={taskInfoCss}/>
                        <Content title="Observações" description={task && task.observations ? task.observations : "Sem observações"} theme={taskInfoCss}/>
                        <Content title="Prazo" description={task && task.deadline ? `${task.deadline.getDate()}/${task.deadline.getMonth()}/${task.deadline.getFullYear()}` : "Sem prazo"} theme={taskInfoCss}/>
                    </div>
                    <div className="flex flex-row justify-center scale-130">
                        <ActionBtn taskId={task && task.id ? task.id : -1}/>
                    </div>
                </div>
            </Modal>
        ) : (<></>)
    );
}

function Content({ title, description, theme }: {title: string, description: string, theme: taskInfoCss}) {
    return <div>
        <h1 className={`font-bold ${theme.text}`}>{title}</h1>
        <p className={`${theme.text}`}>{description}</p>
    </div>
}