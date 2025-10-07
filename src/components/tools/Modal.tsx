
export default function Modal({children}: {children: React.ReactElement}): React.ReactElement {
    return (
        <div className={`backdrop-blur-sm transition duration-300 fixed inset-0 h-screen w-screen bg-black/60 z-10 flex justify-center pt-10`}>
            {children}
        </div>
    )
}

