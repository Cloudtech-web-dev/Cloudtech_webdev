import { Link } from "react-router-dom"

export const ProjectCard = ({ id, cover, name }) => {
    return (
        <div className="d-flex flex-column h-100 gap-4 text-center w-75 mx-auto">
            <div className="text-ct-secondary">
                <Link to={`/projects/${id}`}>
                    <img src={cover} alt={`Portada del proyecto ${name}`} className="w-100 h-100 object-fit-cover custom-gallery-img" />
                </Link>
            </div>
            <Link to={`/projects/${id}`} className="fs-5 link-custom-hover">{name}</Link>
        </div>
    )
}