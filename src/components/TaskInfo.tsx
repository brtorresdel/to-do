import { X } from "lucide-react";

export default function TaskInfo() {
    // TODO: finish the TaskInfo form HTML
    // TODO: update the CSS to change to dark mode
    // TODO: add props with the task info
    // TODO: create the function to close the modal
    // TODO: add the buttons to edit and delete the task
    // TODO: add the close tab span

    return <div className="w-1/2 h-fit bg-bg-light rounded-md opacity-100 p-5 flex flex-col shadow-mg gap-2">
        <div className="flex flex-row flex-nowrap justify-between">
            <h1 className="text-2xl font-bold text-font-light">Título da tarefa</h1>
            <X className="hover:scale-130 transform duration-150"/>
        </div>
        <hr />
        <div>
            <Content title="Descrição" description="Descrição do teste 1"/>
        </div>
        <div>
            <Content title="Observações" description="Descrição do teste 1"/>
        </div>
        <div>
            <Content title="Prazo" description="Descrição do teste 1"/>
        </div>
        
    </div>
}

function Content({ title, description }: {title: string, description: string}) {
    return <div>
        <h1>{title}</h1>
        <p>{description}</p>
    </div>
}