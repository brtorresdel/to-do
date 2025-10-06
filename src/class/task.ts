import { type Task } from "../types/task";

export class TaskLS {
    static lsName = "taskList";

    static getList(): Task[] {
        const data = localStorage.getItem(this.lsName);

        if (!data) {
            this.saveList([]);
            return [];
        }

        return JSON.parse(data).map((task: Task) => ({
            ...task,
            createdAt: task.createdAt ? new Date(task.createdAt) : null,
            expirationDate: task.deadline ? new Date(task.deadline) : null
        }))
    }

    static saveList(list: Task[]): void {
        localStorage.setItem(this.lsName, JSON.stringify(list));
    }

    static addTask(task: Task): void {
        const list = this.getList();
        
        list.push({
            ...task,
            id: list.length === 0 ? 1 : ((list[list.length - 1]?.id ?? 0) + 1),
            
        });
        this.saveList(list);
    }

    static removeTask(id: number): void {
        const list = this.getList().filter(task => task.id !== id);
        this.saveList(list)
    }

    static updateTask(upTask: Task): void {
        const list = this.getList().map(task => 
            task.id === upTask.id ? upTask : task
        );
        this.saveList(list);
    }

    static getTask(id: number): Task | undefined {
        return this.getList().find(task => task.id === id);
    }
}