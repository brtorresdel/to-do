import { SquarePen, Trash2 } from "lucide-react";

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

    // TODO: update the item style to support dark mode
    // TODO: style the checkbox items

    const status: TaskStatus = !task.expirationDate ? 1 : new Date() > task.expirationDate ? 3 : 2;

    return <li key={task.id} 
    className="bg-task-info-light w-full h-11 p-2 mt-3 rounded-md 
    transition duration-150 hover:border-blue-400 hover:scale-101 border-2 border-transparent">
        <div className="flex flex-row items-center gap-2">
            <input type="checkbox" name="" id="" />
            {task.title} 
            <StatusInfo status={ status }/>
        </div>
        <div>
            <ActionBtn taskId={task.id}/>
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

function ActionBtn({taskId}: {taskId: number}) {

    // TODO: update the buttons style to support dark mode
    // TODO: create function to use the taskId recieved from props

    return (
        <div>
            <button>
                <SquarePen />
            </button>
            <button>
                <Trash2 />
            </button>
        </div>
    )
}