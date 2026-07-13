export const Card = ({ name, position, review, profilePicture, logo }) => {
    return (
        <div className="d-flex flex-column card border px-0 px-md-4 py-3 h-100" style={{ borderRadius: 12, "--bs-border-color": "var(--bs-gray-300)", color: "var(--bs-gray-100)" }}>
            <div className="card-body flex-grow-1 overflow-hidden" style={{ maxHeight: 327 }}>
                <p className="card-text px-0 px-md-2">{review}</p>
            </div>
            <div className="container mt-auto flex-shrink-1">
                <hr className="opacity-100 mt-4" style={{ borderTop: "1px solid var(--bs-gray-300)", marginBottom: 20 }} />
                <div className="row d-flex align-items-center gap-3 flex-nowrap" style={{ height: 68 }}>
                    <div className="col-auto justify-content-center d-flex justify-content-md-start" style={{ gap: 18 }}>
                        <img src={profilePicture} alt="CloudTech client profile picture" className="rounded-circle object-fit-cover" style={{ width: 60, aspectRatio: 1 }} />
                        <div className="d-flex align-self-center flex-column text-start">
                            <h5 className="mb-0 ">{name}</h5>
                            <h6 className="fw-normal">{position}</h6>
                        </div>
                    </div>
                    <div className="col d-flex justify-content-center h-100">
                        <img src={logo} alt="CloudTech client company logo" className="mw-100 object-fit-contain" />
                    </div>

                </div>
            </div>
        </div>
    )
}