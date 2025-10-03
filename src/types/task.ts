type Task = {
    id: number;
    title: string;
    description: string | null;
    createdAt: Date;
    deadline: Date | null;
    observations: string | null
    finished: boolean
};

type TaskModalProps = {
    taskID: number | null;
    hidden: boolean;
    closeModal: () => void
};

type TaskInfoProps = {
    taskID: number | null
}

type TaskStatus = 1 | 2 | 3 | 4;

export type { Task , TaskModalProps , TaskStatus, TaskInfoProps};