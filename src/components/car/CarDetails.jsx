import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { canUserManage } from "../../utils/userManager";
import { Form, Button } from "react-bootstrap";
import DeleteModal from "../DeleteModal/DeleteModal";
import EditCarModalForm from "./editCarModalForm/EditCarModalForm";
import Review from "../review/Review";
import styles from "./CarDetails.module.css";
import * as rentingService from "../../services/rentingService";
import * as reviewService from "../../services/reviewsService";

export default function CarDetails() {
  const { id } = useParams();
  const [car, setCar] = useState({});
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [reviewText, setReviewText] = useState("");
  const [reviews, setReviews] = useState([]);
  const [isEditMode, setIsEditMode] = useState(false);
  const [editingReviewId, setEditingReviewId] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    rentingService
      .getCarById(id)
      .then((result) => setCar(result))
      .catch((err) => console.error(err));

    reviewService
      .getAllReviewsForCurrentCar(id)
      .then((result) => setReviews(result))
      .catch((err) => console.log(err));
  }, [id]);

  const onDeleteModalClick = () => {
    setShowDeleteModal(true);
  };

  const editModalClick = () => {
    setShowEditModal(true);
  };

  const editHandler = async (carId, carData) => {
    const result = await rentingService.editCarById(carId, carData);
    if (result.message) {
      // throw validation
      return alert("not ok");
    }

    setCar(result);
  };

  const deleteModalHandler = async () => {
    try {
      const result = await rentingService.deleteCarById(id);
      if (result.message) {
        return "toast for error " + result.message;
      } else {
        navigate("/cars");
        return "toast for success";
      }
    } catch (error) {
      console.log(error);
    }
  };
  const addReview = async () => {
    const result = await reviewService.addReview(id, reviewText);

    if (result.message) {
      return alert(result.message);
    }

    result.owner = JSON.parse(localStorage.getItem("auth"));

    setReviews((state) => [...state, result]);
  };

  const editReview = async () => {
    const result = await reviewService.editReview(editingReviewId, reviewText);
    if (result.message) {
      console.log(result);
      return alert(result.message);
    }

    setReviews((state) => {
      return state.map((review) => {
        if (review._id === result._id) {
          result.owner = JSON.parse(localStorage.getItem("auth"));
          return result;
        }
        return review;
      });
    });

    setIsEditMode(false);
  };
  const submitHandler = async (e) => {
    e.preventDefault();

    if (!reviewText) {
      alert("There should be value");
    }

    if (isEditMode) {
      editReview();
    } else {
      addReview();
    }

    setReviewText("");
  };

  const deleteReviewHandler = async (id) => {
    const result = await reviewService.deleteReview(id);
    if (result.message) {
      return alert(result.message);
    }

    setReviews((state) => state.filter((review) => review._id !== id));
  };

  const editReviewHandler = async (id, text) => {
    setReviewText(text);
    setIsEditMode(true);
    setEditingReviewId(id);
  };

  const closeModal = () => {
    setShowDeleteModal(false);
    setShowEditModal(false);
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

            {showEditModal && (
              <EditCarModalForm
                editHandler={editHandler}
                closeModalHandler={closeModal}
                data={car}
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
              {canUserManage(car._ownerId) && (
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
                  <button
                    className={`btn btn-warning ${styles.buttonEdit}`}
                    onClick={editModalClick}
                  >
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
        <h3>Reviews</h3>
        <section className="section">
          <Form className="form" onSubmit={submitHandler}>
            <Form.Control
              type="textarea"
              name="review"
              value={reviewText}
              onChange={(e) => setReviewText(e.target.value)}
              placeholder="Place your review here..."
            ></Form.Control>

            <Button className="btn btn-primary" type="submit">
              Add Review
            </Button>
          </Form>
        </section>
        <div className={styles.reviewsSection}>
          {reviews.length > 0
            ? reviews.map((review) => (
                <Review
                  key={review._id}
                  {...review}
                  deleteHandler={deleteReviewHandler}
                  editHandler={editReviewHandler}
                />
              ))
            : "No Reviews added ..."}
        </div>
      </div>
    </div>
  );
}
