import * as styles from "./PopupBody.module.css";

export default function PopupBody(car) {
  return (
    <div className={styles.cardWrapper}>
      <div>
        <img src={car.imageUrl} alt="Image" className="img-fluid" />
      </div>
      <div className="listing-contents h-100">
        <h3>
          {car.make} {car.model}
        </h3>
        <div>
          <strong className={styles.price}>{car.rentalPrice}$</strong>
          <span className="mx-1">/</span>day
        </div>
        <div>
          <div>
            <span>City:</span>
            <span>{car.location.city}</span>
          </div>
          <span>{car.isAvailable ? "Available" : "Rented"}</span>
          <br />
          <div className={styles.buttonContainer}>
            <button
              id="map-button"
              className="btn btn-secondary"
            >
              View More
            </button>
            <button
              id="map-button"
              className="btn btn-primary"
            >
              Rent Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
