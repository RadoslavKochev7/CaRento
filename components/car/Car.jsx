import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import styles from "./Car.module.css";
import DeleteModal from "../DeleteModal";

export default function Car(props) {
  const {
    _id,
    rentalPrice,
    make,
    model,
    year,
    imageUrl,
    horsePower,
    description,
    mileage,
    onDeleteHandler,
  } = props;
  const { city, country } = props.location;

  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const onDeleteModalClick = () => {
    setShowDeleteModal(true);
  };

  const deleteModalHandler = () => {
    const carId = _id;
    onDeleteHandler(carId);
  };

  const closeModal = () => {
    setShowDeleteModal(false);
  };

  return (
    <div className="col-md-6 col-lg-4 mb-4">
      {showDeleteModal && (
        <DeleteModal
          deleteHandler={deleteModalHandler}
          closeModalHandler={closeModal}
        />
      )}
      <div
        className={`listing d-block align-items-stretch ${styles.card}`}
      >
        <div className="listing-img h-100 mr-4">
          <img src={imageUrl} alt="Image" className="img-fluid" />
        </div>
        <div className="listing-contents h-100">
          <h3>
            {make} {model}
          </h3>
          <div className="rent-price">
            <span>
              <b>Price:</b>
            </span>
            <strong> {rentalPrice}$</strong>
            <span className="mx-1">/</span>day
          </div>
          <div className="listing-feature">
            <span className="caption">
              <b>Year:</b> {year}
            </span>
            <span className="caption">
              <b>HP :</b> {horsePower}
            </span>
            <span className="caption">
              <b>Mileage: </b>
              {mileage} km
            </span>
          </div>

          <div>
            <div>
              <span className="caption">
                <b>City:</b> {city}
              </span>
              <span className="caption">
                <b>Country: </b>
                {country}
              </span>
            </div>
          </div>
          <span className="caption">
            <b>Description:</b>
          </span>
          <p className={styles.desc}>{description}</p>
          <hr />
          <div className={styles.buttons}>
            <button className={`btn btn-success ${styles.buttonItem}`}>
              <span className={styles.spanSVG}>
                <FontAwesomeIcon icon={faPlus} />
              </span>
              Rent Now
            </button>
            <button
              className={`btn btn-danger ${styles.buttonItem}`}
              onClick={onDeleteModalClick}
            >
              <span className={styles.spanSVG}>
                <FontAwesomeIcon icon={faTrashCan} />
              </span>
              Delete
            </button>
            <button className={`btn btn-warning ${styles.buttonEdit}`}>
              <span className={styles.spanSVG}>
                <FontAwesomeIcon icon={faPenToSquare} />
              </span>
              Edit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
