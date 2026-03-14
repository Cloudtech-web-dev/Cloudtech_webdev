import { Link } from "react-router-dom";

export const Card = ({ id, cover, name, preview, index }) => {

    const isEven = index % 2 === 0;

    return (
        <div className="row align-items-center g-4 g-lg-5 mb-5 mt-5">

            {/* Text */}
            <div className={`col-12 col-lg-6 ${!isEven ? "order-lg-2" : "order-lg-1"}`}>
                <div className="text-center text-lg-start px-lg-4">
                    <h3 className="text-white fw-bold mb-3">
                        {name}
                    </h3>
                    <p className="text-white ct-paragraph mb-4">
                        {preview}
                    </p>
                    <Link to={`/projects/${id}`} className="btn btn-outline btn-lg rounded-pill px-4 mx-auto w-lg-auto">
                        Descubrir
                    </Link>
                </div>
            </div>

            {/* Image */}
            <div className={`col-12 col-lg-6 ${!isEven ? "order-lg-1" : "order-lg-2"}`}>
                <img
                    src={cover}
                    alt={name}
                    className="img-fluid rounded-4 object-fit-cover w-100"
                />
            </div>
        </div>
    );
};