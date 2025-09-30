import { createContext } from "react";

export interface TaskInfo {
    taskID: number | null;
    seeTask: (id: number) => void
}

export const TaskInfoContext = createContext<TaskInfo> ({
    taskID: null,
    seeTask: (id) => {}
})