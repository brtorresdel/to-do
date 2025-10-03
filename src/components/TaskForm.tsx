import { Plus, X } from "lucide-react";
import type { Task } from "../types/task";
import type { taskFormCss, inputCss, btnCss } from "../types/cssDecoration";
import { ThemeContext, type ThemeContextType } from "../context/Theme";
import { useContext, useState } from "react";

export default function TaskForm({ task, close }: { task: Task, close: () => void }): React.ReactElement {
    // TODO: create the function to add the task to the localStorage list
    // TODO: add the close tab span
    // TODO: change the close btn color to respect dark mode

    const [title, setTitle] = useState("");
    const [dueDate, setDueDate] = useState("");
    const [description, setDescription] = useState("");
    const [observations, setObservations] = useState("");

    const { theme } : ThemeContextType = useContext(ThemeContext); 

    const taskFormCss: taskFormCss = {
        bg: theme === "light" ? "bg-bg-light" : "bg-bg-dark",
        text: theme === "light" ? "text-font-light" : "text-font-dark", 
        border: theme === "light" ? "border-font-light" : "border-font-dark"
    }

    const btnCss: btnCss = {
        bg: theme === "light" ? "bg-new-task-light" : "bg-new-task-dark",
        textColor: theme === "light" ? "text-font-light" : "text-font-dark",
        svgColor: theme === "light" ? "#2a2b2a" : "#f8f8f8"
    }

    const resetModal = () => {
        close();
        setTitle("");
        setDueDate("");
        setDescription("");
        setObservations("");
    }

    const newTask = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        const taskListStr = localStorage.getItem('taskList');
        const taskListLS = taskListStr ? JSON.parse(taskListStr) : [];

        const newId: number = taskListLS.length > 0 ? taskListLS[taskListLS.length - 1].id + 1 : 1;

        taskListLS.push({
            id: newId,
            title: title,
            dueDate: dueDate !== "" ? new Date(dueDate) : null,
            description: description,
            observations: observations !== "" ? observations : null
        })
        localStorage.setItem('taskList', JSON.stringify(taskListLS));
        resetModal();
    }

    return (
        <div className={`w-1/2 h-fit rounded-md opacity-100 p-5 flex flex-col shadow-mg gap-2 ${taskFormCss.bg}`}>
            <div className="flex flex-row flex-nowrap justify-between w-full items-center">
                <h1 className={`text-2xl font-bold ${taskFormCss.text}`}>
                    {!task ? "Nova tarefa" : "Editar tarefa"}
                </h1>
                <div>
                    <X className="hover:scale-130 transform duration-150" onClick={resetModal} color={btnCss.svgColor}/>
                    <span className="absolute -top-7 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition duration-300 pointer-events-none z-10">
                        Fechar
                    </span>
                </div>
            </div>
            <form className="w-full flex flex-col gap-2">
                <InputElem name="título" required={true} theme={theme} value={title} onChange={(value) => setTitle(value)}/>
                <InputElem name="prazo" required={false} theme={theme} value={dueDate} onChange={value => setDueDate(value)}/>
                <InputElem name="descrição" required={true} theme={theme} value={description} onChange={value => setDescription(value)}/>
                <InputElem name="observações" required={false} theme={theme} value={observations} onChange={value => setObservations(value)}/>
                <div>
                    <button 
                    className={`${btnCss.bg} h-auto w-full p-3 rounded-lg flex flex-row justify-center-safe gap-2
                    hover:scale-102 hover:drop-shadow-xl active:scale-95 transition duration-150`}
                    onClick={newTask}>
                        <span className={btnCss.textColor}>Adicionar tarefa</span> <Plus color={btnCss.svgColor}/>
                    </button>
                </div>
            </form>
        </div>
    )
}

function InputElem ( {name, required, value, theme, onChange}: {name: string, required: boolean, value?: string, theme: "light" | "dark", onChange: (value: string) => void} ) {
    // TODO: add the required function to validade the data entry
    
    const capitalize = name.charAt(0).toUpperCase() + name.slice(1);
    const textArea = name === "descrição" || name === "observações";

    const inputCss: inputCss = {
        bg: theme === 'light' ? "bg-bg-light" : "bg-bg-dark",
        text: theme === 'light' ? "text-font-light" : "text-font-dark",
        border: theme === 'light' ? "border-font-light" : "border-font-dark",
    }

    return <div className="w-full mb-1 mt-1">
        <div className="flex flex-row gap-2 items-center">
            <label htmlFor={name} className={`font-semibold ${inputCss.text}`}>{required ? capitalize + " *" : capitalize}</label>
            {required && <span className="text-red-400 text-sm hidden">Este campo é obrigatório!</span>}
        </div>
        {textArea ?
            <textarea
                name={name}
                placeholder={capitalize}
                required={required}
                className={`w-full border-1 m-0.25 ${inputCss.border} ${inputCss.text} ${inputCss.bg} rounded-lg p-1.5 focus:border-2 focus:m-0 transition duration-200 h-30 overflow-y-auto align-top`}
                value={value ? value : ""}
                onChange={e => onChange(e.target.value)}
            />
        :
            <input 
            type={name !== "prazo" ? "text" : "date"} 
            name={name} 
            placeholder={capitalize}
            className={`w-full border-1 m-0.25 ${inputCss.border} ${inputCss.text} ${inputCss.bg} rounded-lg p-1.5 focus:border-2 focus:m-0 transition duration-200`}
            value={value ? value : ""}
            onChange={e => onChange(e.target.value)}/>}
    </div>
}