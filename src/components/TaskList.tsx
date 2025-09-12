import { ThemeContext, type ThemeContextType } from "../context/Theme";
import { SquarePen, Trash2 } from "lucide-react";
import { useContext } from "react";

interface Task {
    id: number;
    title: string;
    description: string | null;
    createdAt: Date;
    expirationDate: Date | null;
    observation: string | null
}

interface statusCss {
    bgColor: string;
    text: string
}

interface taskListCss {
    bg: string;
    text: string;
    border: string
}

interface actionBtnCss {
    bg: string;
    color: string
}

type TaskStatus = 1 | 2 | 3;

export default function TaskList() {

    // TODO: useEffect to get the task list on the localStorage

    const tasks: Task[] = [
        {
            id: 1,
            title: "Comprar mantimentos",
            description: "Arroz, feijão, leite e frutas",
            createdAt: new Date("2025-08-15T10:00:00"),
            expirationDate: new Date("2025-09-30T23:59:59"), // ainda no prazo
            observation: null
        },
        {
            id: 2,
            title: "Pagar conta de luz",
            description: null,
            createdAt: new Date("2025-08-01T08:30:00"),
            expirationDate: new Date("2025-08-10T23:59:59"), // já atrasada
            observation: "Multa de 2% após vencimento"
        },
        {
            id: 3,
            title: "Revisar trabalho da faculdade",
            description: "Conferir referências e ajustar formatação",
            createdAt: new Date("2025-08-18T14:15:00"),
            expirationDate: null, // sem prazo definido
            observation: null
        },
        {
            id: 4,
            title: "Enviar relatório mensal",
            description: "Relatório de desempenho da equipe",
            createdAt: new Date("2025-07-30T09:00:00"),
            expirationDate: new Date("2025-08-05T18:00:00"), // atrasada
            observation: "Ficou pendente por falta de dados"
        },
        {
            id: 5,
            title: "Agendar consulta médica",
            description: "Check-up anual",
            createdAt: new Date("2025-08-19T16:00:00"),
            expirationDate: new Date("2025-09-30T23:59:59"), // dentro do prazo
            observation: null
        }
    ];

    return (
        <div className="w-1/2">
            {tasks.length > 0 ?
                <ul className="flex-col">{tasks.map(currentTask => <TaskListItem task={currentTask} />)}</ul> :
                <p>Nenhuma tarefa localizada</p>
            }
        </div>
    )
}

function TaskListItem({ task }: { task: Task }) {

    const {theme}: ThemeContextType = useContext(ThemeContext);

    // TODO: finish style the checkbox items

    const status: TaskStatus = !task.expirationDate ? 1 : new Date() > task.expirationDate ? 3 : 2;

    const taskListCss: taskListCss = {
        bg: theme === "light" ? "bg-task-info-light" : "bg-task-info-dark",
        text: theme === "light" ? "text-font-light" : "text-font-dark",
        border: theme === "light" ? "hover:border-blue-400" : "hover:border-border-dark"
    }

    return <li key={task.id} 
    className={`${taskListCss.bg} w-full h-fit p-3 mt-3 rounded-md
    flex flex-row justify-between items-center
    transition duration-150 ${taskListCss.border} hover:scale-101 border-2 border-transparent`}>
        <div className="flex flex-row items-center gap-2">
            <input type="checkbox" name="" id=""
            className={`w-5 h-5 border-2 bg-transparent rounded-sm acce transition duration-150`}/>
            <p className={`hover:underline hover:cursor-pointer ${taskListCss.text}`}>{task.title}</p> 
            <StatusInfo status={ status }/>
        </div>
        <div>
            <ActionBtn taskId={task.id} theme={theme}/>
        </div>
    </li>
}

function StatusInfo ({ status }: {status: TaskStatus} ) {
    let statusCss: statusCss;

    switch (status) {
        case 1:
            statusCss = { bgColor: "bg-status-no-deadline", text: "Sem prazo" };
            break;

        case 2:
            statusCss = { bgColor: "bg-status-on-date", text: "No prazo" };
            break;

        case 3:
            statusCss = { bgColor: "bg-status-overdue", text: "Atrasada" };
            break;
    }

    return (
        <div className={`${statusCss.bgColor} text-white text-center text-[10px] w-fit px-2 py-1 rounded-lg`}>
            {statusCss.text}
        </div>
    )
}

function ActionBtn({taskId, theme}: {taskId: number, theme: string}) {

    // TODO: create function to use the taskId recieved from props

    const editBtnCss: actionBtnCss =  {
        bg: theme === "light" ? "bg-task-edit-light" : "bg-task-edit-dark",
        color: theme === "light" ? "stroke-font-light" : "stroke-font-dark"
    }

    const deleteBtnCss: actionBtnCss = {
        bg: theme === "light" ? "bg-task-delete-light" : "bg-task-delete-dark",
        color: theme === "light" ? "stroke-font-light" : "stroke-font-dark"
    }

    return (
        <div className="flex flex-row gap-2">
            <div className="relative group">
                <button className={`${editBtnCss.bg} p-1 rounded-md transition duration-150 hover:scale-105`}>
                    <SquarePen className={`${editBtnCss.color}`}/>
                </button>
                <span className="absolute -top-7 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition duration-300 pointer-events-none z-10">
                    Editar
                </span>
            </div>
            <div className="relative group">
                <button className={`${deleteBtnCss.bg} p-1 rounded-md transition duration-150 hover:scale-105`}>
                    <Trash2 className={`${deleteBtnCss.color}`}/>
                </button>
                <span className="absolute -top-7 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition duration-300 pointer-events-none z-10">
                    Excluir
                </span>
            </div>
        </div>
    )
}