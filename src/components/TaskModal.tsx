import { Plus } from "lucide-react";

export default function TaskModal() {
    return (
        <div className="fixed inset-0 h-screen w-screen bg-black/60 z-10 flex justify-center pt-10">
            <NewTaskForm />
        </div>
    )
}

function NewTaskForm () {
    return (
        <div className="w-1/2 h-fit bg-bg-light rounded-md opacity-100 p-5 flex flex-col">
            <h1 className="text-2xl text-font-light">
                Nova tarefa
            </h1>
            <form className="w-full flex flex-col">
                <InputElem name="título" required={true}/>
                <InputElem name="prazo" required={false}/>
                <InputElem name="descrição" required={true}/>
                <InputElem name="observações" required={false}/>
                <button type="submit">
                    Adicionar tarefa <Plus />
                </button>
            </form>
        </div>
    )
}

function InputElem ( {name, required}: {name: string, required: boolean} ) {
    const capitalize = name.charAt(0).toUpperCase() + name.slice(1);

    return <>
        <div className="flex flex-row gap-3 items-center">
            <label htmlFor={name}>{required ? capitalize + " *" : capitalize}</label>
            {required && <span className="text-red-400 text-sm">Este campo é obrigatório!</span>}
        </div>
        <input type={name !== "prazo" ? "text" : "date"} name={name} placeholder={capitalize} />
    </>
}