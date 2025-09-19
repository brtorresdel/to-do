import { Plus, X } from "lucide-react";

export default function NewTaskForm () {
    // TODO: finish the NewTaskForm HTML
    // TODO: update the CSS to change to dark mode
    // TODO: create the function to close the modal
    // TODO: create the function to add the task to the localStorage list
    // TODO: add the close tab span

    return (
        <div className="w-1/2 h-fit bg-bg-light rounded-md opacity-100 p-5 flex flex-col shadow-mg gap-2 hidden">
            <div className="flex flex-row flex-nowrap justify-between w-full items-center">
                <h1 className="text-2xl text-font-light font-bold">
                    Nova tarefa
                </h1>
                <X className="hover:scale-130 transform duration-150"/>
            </div>
            <form className="w-full flex flex-col gap-2">
                <InputElem name="título" required={true}/>
                <InputElem name="prazo" required={false}/>
                <InputElem name="descrição" required={true}/>
                <InputElem name="observações" required={false}/>
                <div>
                    <button className="bg-new-task-light h-auto w-full p-3 rounded-lg flex flex-row justify-center-safe gap-2
                    hover:scale-102 hover:drop-shadow-xl active:scale-95 transition duration-150">
                    Adicionar tarefa <Plus />
                </button>
                </div>
            </form>
        </div>
    )
}

function InputElem ( {name, required}: {name: string, required: boolean} ) {
    const capitalize = name.charAt(0).toUpperCase() + name.slice(1);
    const textArea = name === "descrição" || name === "observações";

    return <div className="w-full mb-1 mt-1">
        <div className="flex flex-row gap-2 items-center">
            <label htmlFor={name} className="font-semibold">{required ? capitalize + " *" : capitalize}</label>
            {required && <span className="text-red-400 text-sm hidden">Este campo é obrigatório!</span>}
        </div>
        {textArea ?
            <textarea
                name={name}
                placeholder={capitalize}
                required={required}
                className="w-full border-1 m-0.25 border-font-light rounded-lg p-1.5 focus:border-2 focus:m-0 transition duration-200 h-30 overflow-y-auto align-top"
            />
        :
            <input 
            type={name !== "prazo" ? "text" : "date"} 
            name={name} 
            placeholder={capitalize}
            className={`w-full border-1 m-0.25 border-font-light rounded-lg p-1.5 focus:border-2 focus:m-0 transition duration-200`}/>}
    </div>
}