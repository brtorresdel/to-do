import { useState } from "react";
import { Pencil, Trash2 } from 'lucide-react';

function Task({ task }) {
    return <div
    className="flex flex-row justify-between items-center w-2xl rounded-md drop-shadow-lg
    p-4 text-xl
    bg-task-light text-font-light dark:bg-task-dark dark:text-font-dark">
        <div className="flex flex-row justify-center items-center gap-3">
            <input type="checkbox" className="size-6 rounded-lg"/>
            <p className="text-2xl font-noto-sans">{task.title}</p>
        </div>
        <div className="flex flex-row gap-3 justify-between items-center">
            <button className="
            bg-edit-light dark:bg-edit-dark text-font-light dark:text-font-dark p-1 md:p-2 rounded-md"><Pencil /></button>
            <button className="
            bg-delete-light dark:bg-delete-dark text-font-light dark:text-font-dark p-1 md:p-2 rounded-md"><Trash2 /></button>
        </div>
    </div>
}

function TaskList({ tasks }) {
    return <>
        <div className="flex flex-col justify-around gap-4">
            {tasks.map(task => <Task key={task.id} task={task}/>)}
        </div>
    </>    
}

export default TaskList;