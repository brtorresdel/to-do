import { useState } from "react";
import { Pencil, Trash2 } from 'lucide-react';

function Task({ task }) {
    return <div
    className="flex flex-row justify-between items-center w-2xl rounded-md shadow-md
    p-4 text-xl
    bg-task-light text-font-light dark:bg-task-dark dark:text-font-dark">
        <div>
            <input type="checkbox" name="" id="" /> {task.title}
        </div>
        <div className="hidden md:block
        flex flex-row gap-8 ">
            <button><Pencil /></button>
            <button><Trash2 /></button>
        </div>
    </div>
}

function TaskList({ tasks }) {
    return <>
        <div className="flex flex-col justify around gap-4">
            {tasks.map(task => <Task key={task.id} task={task}/>)}
        </div>
    </>
}

export default TaskList;