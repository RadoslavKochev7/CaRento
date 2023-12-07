import { Link, useNavigate } from "react-router-dom";
import * as styles from "./PopupBody.module.css";
import { details } from "../../constants/pathConstants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { faCircleCheck, faCircleXmark } from "@fortawesome/free-regular-svg-icons";

export default function PopupBody(car) {
  return (
    <div className={styles.cardWrapper}>
      <div>
        <img src={car.imageUrl} alt="Image" className="img-fluid" />
      </div>
      <div className="listing-contents h-100 p-2">
        <h3 className="text-center">
          {car.make} {car.model}
        </h3>
        <div>
          <span><b>Price: </b></span>
          <span className={styles.price}>{car.rentalPrice}$ / day</span>
        </div>
        <div>
          <div>
            <span><b>Address: </b></span>
            <span>
              <i>{car.address}</i>
            </span>
          </div>
          {!car.isAvailable && (
              <>
                <span className={styles.carIconXmark}>
                  <FontAwesomeIcon icon={faCircleXmark} />
                </span>
                <b>Rented</b>
              </>
            )}
            {car.isAvailable && (
              <>
                <span className={styles.carIconCheck}>
                  <FontAwesomeIcon icon={faCircleCheck} />
                </span>
                <b>Available</b>
              </>
            )}
          <div className={styles.buttonContainer}>
            <Link
              id="map-button"
              className="btn btn-outline-secondary"
              to={details.replace(":id", car._id)}
            >
              <FontAwesomeIcon className="mr-1" icon={faCircleInfo} />
              View More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
