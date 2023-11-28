import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import DeleteModal from "../DeleteModal";
import styles from "./CarDetails.module.css";
import * as rentingService from "../../services/rentingService";

export default function CarDetails() {
  const { id } = useParams();
  const [car, setCar] = useState({});
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  useEffect(() => {
    rentingService
      .getCarById(id)
      .then((result) => setCar(result))
      .catch((err) => console.error(err));
  }, [id]);

  const onDeleteModalClick = () => {
    setShowDeleteModal(true);
  };

  const deleteModalHandler = async () => {
    try {
       const result = await rentingService.deleteCarById(id);
       if (result.message) {
        return "toast for error " + result.message;
       } else {
        return "toast for success";
       }
      
    } catch (error) {
      console.log(error);
    }
  };

  const closeModal = () => {
    setShowDeleteModal(false);
  };

  return (
    <div className="site-section">
      <Link className="btn btn-secondary" to={"/cars"}>
        Go Back
      </Link>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 mb-5 mb-lg-0">
            {car.imageUrl && (
              <img
                src={
                  car.imageUrl.startsWith("images")
                    ? `../../${car.imageUrl}`
                    : car.imageUrl
                }
                alt="Image"
                className="img-fluid rounded"
              />
            )}
          </div>
          <div className="col-lg-4 ml-auto">
            {showDeleteModal && (
              <DeleteModal
                deleteHandler={deleteModalHandler}
                closeModalHandler={closeModal}
              />
            )}
            <div className="listing-contents">
              <h3 className={styles.h3}>
                {car.make} {car.model}
              </h3>
              <div className="rent-price">
                <span>
                  <b>Price:</b>
                </span>
                <strong> {car.rentalPrice}$</strong>
                <span className="mx-1">/</span>day
              </div>
              <div className="listing-feature">
                <span className="caption">
                  <b>Year:</b> {car.year}
                </span>
                <span className="caption">
                  <b>HP :</b> {car.horsePower}
                </span>
                <span className="caption">
                  <b>Mileage: </b>
                  {car.mileage} km
                </span>
              </div>

              <div>
                <div>
                  <span className="caption">
                    <b>City:</b> {car.city}
                  </span>
                  <span className="caption">
                    <b>Country: </b>
                    {car.country}
                  </span>
                </div>
              </div>
              <span className="caption">
                <b>Description:</b>
              </span>
              <p>{car.description}</p>
              <hr />
              { (
                <div>
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
              )}
            </div>
          </div>
        </div>
        <h2>Our History</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit
          suscipit, repudiandae similique accusantium eius nulla quam laudantium
          sequi.
        </p>
        <p>
          Debitis voluptates corporis saepe molestias tenetur ab quae, quo earum
          commodi, laborum dolore, fuga aliquid delectus cum ipsa?
        </p>
      </div>
    </div>
  );
}
