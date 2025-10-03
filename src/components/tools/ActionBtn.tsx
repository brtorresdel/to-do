import type { actionBtnCss } from "../../types/cssDecoration";
import { SquarePen, Trash2 } from "lucide-react";

export default function ActionBtn({taskId, theme}: {taskId: number, theme: string}): React.ReactElement {

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
                <button className={`${editBtnCss.bg} p-1 rounded-md transition duration-150 hover:scale-105 cursor-pointer`}>
                    <SquarePen className={`${editBtnCss.color}`}/>
                </button>
                <span className="absolute -top-7 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition duration-300 pointer-events-none z-10">
                    Editar
                </span>
            </div>
            <div className="relative group">
                <button className={`${deleteBtnCss.bg} p-1 rounded-md transition duration-150 hover:scale-105 cursor-pointer`}>
                    <Trash2 className={`${deleteBtnCss.color}`}/>
                </button>
                <span className="absolute -top-7 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition duration-300 pointer-events-none z-10">
                    Excluir
                </span>
            </div>
        </div>
    )
}