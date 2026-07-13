export const Card = ({ name, position, description, image, catImage, mailLink, linkedinLink, githubLink }) => {
    return (
        <div className="h-100 d-flex flex-column">
            <div className="team-card">
                <div className="card-img-wrapper overflow-hidden">
                    <img src={image} className="original-image w-100 h-100 object-fit-cover" alt="CloudTech Team member profile picture" />
                    <div
                        className="cat-image-overlay cat-transition"
                        style={{ '--cat-image-url': `url(${catImage})` }}
                    ></div>
                </div>
            </div>

            <div className="text-start pt-4">
                <h3 className="team-card-name mb-1">{name}</h3>
                <h5 className="team-description mb-3">{position}</h5>
            </div>
        </div>
    )
}