interface Task {
    id: number;
    title: string;
    description: string | null;
    createdAt: Date;
    expirationDate: Date;
    observation: string | null
}

export default function TaskList() {

    const tasks: Task[] = [
        {
            id: 1,
            title: "Comprar mantimentos",
            description: "Arroz, feijão, leite e frutas",
            createdAt: new Date("2025-08-15T10:00:00"),
            expirationDate: new Date("2025-08-25T23:59:59"), // ainda no prazo
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
            expirationDate: new Date("2025-08-22T23:59:59"), // ainda no prazo
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
            expirationDate: new Date("2025-08-28T23:59:59"), // dentro do prazo
            observation: null
        }
    ];

    return (
        <div className="w-1/2">
            {tasks.length > 0 ?
                <ul className="flex-col">{tasks.map(currentTask => <Task task={currentTask} />)}</ul> :
                <p>Nenhuma tarefa localizada</p>
            }
        </div>
    )
}

function Task( task : Task) {
    return <li key={task.id} 
    className="bg-task-info-light w-full h-11 p-2 mt-3 rounded-md 
    transition duration-150 hover:border-blue-400 border-2 border-transparent">
        <input type="checkbox"/>
        {task.title} - {task.description}
    </li>
}