import { useState } from "react";

function Task({ task }) {
    return <div
    className="flex flex-col justify-items-start">
        {task.title}
    </div>
}

function TaskList({ tasks }) {
    return <>
        <div className="flex flex-col items-center">
            {tasks.map(task => <Task key={task.id} task={task}/>)}
        </div>
    </>
}

export default TaskList;