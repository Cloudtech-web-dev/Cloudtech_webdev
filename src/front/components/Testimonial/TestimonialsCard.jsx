import styles from "../../styles/components/HomeTestimonials.module.css"

export const TestimonialsCard = ({ name, position, review, profilePicture, logo }) => {
    return (
        <div className={styles["card-container"]}>
            <div className={styles["card"]}>
                <div className={styles["card-body"]}>
                    <p className={styles["user-review"]}>{review}</p>
                </div>
                <hr className={styles["card-separator"]} />
                <div className={styles["card-footer"]}>
                    <div className={styles["user-info"]}>
                        <div className={styles["profile-picture-container"]}>
                            <img className={styles["profile-picture"]} src={profilePicture} alt="CloudTech client profile picture" />
                        </div>
                        <div className={styles["user-details"]}>
                            <h4 className={styles["user-name"]}>{name}</h4>
                            <p className={styles["user-position"]}>{position}</p>
                        </div>
                    </div>
                    <div className={styles["brand-logo-container"]}>
                        <img className={styles["brand-logo"]} src={logo} alt="CloudTech client company logo" />
                    </div>
                </div>
            </div>
        </div>
    )
};

export default TestimonialsCard;