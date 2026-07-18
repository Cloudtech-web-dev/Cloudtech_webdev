export const Card = ({ name, position, review, profilePicture, logo }) => {
    return (
        <div className="testimonial-card d-flex flex-column card border h-100" style={{ borderRadius: 12, "--bs-border-color": "var(--bs-gray-300)", color: "var(--bs-gray-100)", padding: 40 }}>
            <div className="card-body flex-grow-1 overflow-hidden p-0" style={{ maxHeight: 327 }}>
                <p className="card-text font-p1 test-card">{review}</p>
            </div>
            <div className="container mt-auto flex-shrink-1 p-0">
                <hr className="opacity-100 mt-4" style={{ borderTop: "1px solid var(--bs-gray-300)", marginBottom: 20 }} />
                <div className="row d-flex flex-column flex-md-row align-items-center gap-3 flex-nowrap" style={{ height: 68 }}>
                    <div className="col-auto justify-content-center d-flex justify-content-md-start" style={{ gap: 18 }}>
                        <img src={profilePicture} alt="CloudTech client profile picture" className="rounded-circle object-fit-cover" style={{ width: 60, aspectRatio: 1 }} />
                        <div className="d-flex align-self-center flex-column text-start" style={{gap:8.69}}>
                            <h5 className="mb-0 fw-bold lh-1">{name}</h5>
                            <h6 className="mb-0 fw-normal" style={{lineHeight: "1.125", fontFamily: "'Manrope', sans-serif"}}>{position}</h6>
                        </div>
                    </div>
                    <div className="col d-flex justify-content-center h-100">
                        <img src={logo} alt="CloudTech client company logo" className="mw-100 object-fit-contain" />
                    </div>
                </div>
            </div>
            <style>{`
                @media (width < 768px) {
                    .testimonial-card {
                        padding: 20px !important;

                        & > .container > div.row {
                            height: 128px !important;
                            padding-bottom: 70px;
                        }
                    }
                }
            `}</style>
        </div>
    )
}