import { createContext } from "react";
import type { Task } from "../types/task";

export interface ActionBtnContextType {
    editTask: (task: Task) => void,
    deleteTask: (task: Task) => void,
    viewTask: (task: Task) => void
}

export const ActionBtnContext = createContext<ActionBtnContextType>({
    editTask: () => {},
    deleteTask: () => {},
    viewTask: () => {}
})