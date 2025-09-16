interface Task {
    id: number;
    title: string;
    description: string | null;
    createdAt: Date;
    expirationDate: Date | null;
    observation: string | null
    finished: boolean
}

interface statusCss {
    bgColor: string;
    text: string
}

interface taskListCss {
    bg: string;
    text: string;
    border: string;
    check: string
}

interface actionBtnCss {
    bg: string;
    color: string
}

export type {  Task , statusCss , taskListCss , actionBtnCss };