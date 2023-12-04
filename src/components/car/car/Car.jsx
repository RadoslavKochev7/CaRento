import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { canUserManage } from "../../../utils/userManager";
import EditCarModalForm from "../editCarModalForm/EditCarModalForm";
import DeleteModal from "../../DeleteModal/DeleteModal";
import styles from "./Car.module.css";

export default function Car(props) {
  const {
    _id,
    _ownerId,
    rentalPrice,
    make,
    model,
    year,
    imageUrl,
    horsePower,
    description,
    mileage,
    address,
    city,
    country,
    onDeleteHandler,
    onEditHandler,
  } = props;

  // window.scrollTo(0, 0);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const navigate = useNavigate();

  const onDeleteModalClick = () => {
    setShowDeleteModal(true);
  };

  const onEditModalClick = () => {
    setShowEditModal(true);
  };

  const editModalHandler = (carId, carData) => {
    onEditHandler(carId, carData);
  };

  const deleteModalHandler = () => {
    const carId = _id;
    onDeleteHandler(carId);
  };

  const closeModal = () => {
    setShowDeleteModal(false);
    setShowEditModal(false);
  };

  return (
    <div className="col-md-6 col-lg-4 mb-4">
      {showDeleteModal && (
        <DeleteModal
          deleteHandler={deleteModalHandler}
          closeModalHandler={closeModal}
        />
      )}
      {showEditModal && (
        <EditCarModalForm
          editHandler={editModalHandler}
          closeModalHandler={closeModal}
          data={props}
        />
      )}
      <div className={`listing d-block align-items-stretch ${styles.card}`}>
        <div className="listing-img h-100 mr-4">
          <img src={imageUrl} alt="Image" className={styles.carImage} />
        </div>
        <div className="listing-contents h-100">
          <h3>
            {make} {model}
          </h3>
          <div className="rent-price">
            <span>
              <b>Price: </b>
            </span>
            <strong>{rentalPrice}$</strong>
            <span className="mx-1">/</span>day
          </div>
          {/* <div className="listing-feature">
            <span className="caption">
              <b>Year:</b> {year}
            </span>
            <span className="caption">
              <b>HP:</b> {horsePower}
            </span>
            <span className="caption">
              <b>Mileage: </b>
              {mileage} km
            </span>
          </div>

          <div>
           
          </div>
          <span className="caption">
            <b>Description:</b>
          </span>
          <p className={styles.desc}>{description ? description : "No description added"}</p>
          <span className="caption">
            <b>Fuel Type: {fuelType}</b>
          </span>
          <hr /> */}
           <div>
              <span className="caption">
                <b>Currently at:</b> {country}, {city}{address && `, ${address}`}
              </span>
              {/* <span className="caption">
                <b>Country: </b>
                {country}
              </span> */}
            </div>
          <hr />
          <div className={styles.buttons}>
            <button
              className={`btn btn-info ${styles.buttonItem}`}
              onClick={() => navigate(`/cars/details/${_id}`)}
            >
              <span className={styles.spanSVG}>
                <FontAwesomeIcon icon={faPlus} />
              </span>
              Details
            </button>
            {canUserManage(_ownerId) && (
              <>
                <button
                  className={`btn btn-danger ${styles.buttonItem}`}
                  onClick={onDeleteModalClick}
                >
                  <span className={styles.spanSVG}>
                    <FontAwesomeIcon icon={faTrashCan} />
                  </span>
                  Delete
                </button>
                <button
                  className={`btn btn-warning ${styles.buttonEdit}`}
                  onClick={onEditModalClick}
                >
                  <span className={styles.spanSVG}>
                    <FontAwesomeIcon icon={faPenToSquare} />
                  </span>
                  Edit
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}