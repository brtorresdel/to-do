import type { statusCss } from "../../types/cssDecoration";
import type { TaskStatus } from "../../types/task";

export default function StatusInfo ({ status }: {status: TaskStatus} ): React.ReactElement {

    // TODO: create de function to calculate the recieved date and output the right label
    // TODO: edit the props to get the unformated date

    let statusCss: statusCss;

    switch (status) {
        case 1:
            statusCss = { bgColor: "bg-status-no-deadline", text: "Sem prazo" };
            break;

        case 2:
            statusCss = { bgColor: "bg-status-on-date", text: "No prazo" };
            break;

        case 3:
            statusCss = { bgColor: "bg-status-overdue", text: "Atrasada" };
            break;

        case 4:
            statusCss = {bgColor: "bg-status-finished", text: "Finalizada"};
    }

    return (
        <div className={`${statusCss.bgColor} text-white text-center text-[10px] w-fit px-2 py-1 rounded-lg`}>
            {statusCss.text}
        </div>
    )
}