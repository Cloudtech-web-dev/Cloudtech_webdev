export const Card = ({ icon, title, description }) => {
    return (
        <div className="d-flex flex-column gap-4 text-center w-75 mx-auto">
            <div className="text-ct-secondary">
                {icon}
            </div>
            <span className="phase-project-title">{title}</span>
            <p className="text-white font-p1">{description}</p>
        </div>
    )
}