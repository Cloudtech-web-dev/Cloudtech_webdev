export const Card = ({ icon, title, description }) => {
    return (
        <div className="d-flex flex-column gap-4 text-center w-75 mx-auto">
            <div className="text-ct-secondary">
                {icon}
            </div>
            <span className="section-title fs-5">{title}</span>
            <p className="text-white">{description}</p>
        </div>
    )
}