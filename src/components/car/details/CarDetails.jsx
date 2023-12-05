import { useContext, useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { canUserManage } from "../../../utils/userManager";
import { Form, Button } from "react-bootstrap";
import { toast } from "react-toastify";
import DeleteModal from "../../deleteModal/DeleteModal";
import EditCarModalForm from "../editCarModalForm/EditCarModalForm";
import Review from "../../review/Review";
import styles from "./CarDetails.module.css";
import * as toastConstants from "../../../constants/toastConstants";
import * as rentingService from "../../../services/rentingService";
import * as reviewService from "../../../services/reviewsService";
import * as reviewsConstant from "../../../constants/reviewConstants";
import RentForm from "../../rent/RentForm";
import { authContext } from "../../../contexts/AuthContext";

export default function CarDetails() {
  const { id } = useParams();
  const [car, setCar] = useState({});
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [reviewText, setReviewText] = useState("");
  const [reviews, setReviews] = useState([]);
  const [isEditMode, setIsEditMode] = useState(false);
  const { isAuthenticated } = useContext(authContext);
  const [editingReviewId, setEditingReviewId] = useState("");
  const reviewButton = document.getElementById("review");

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
      // toast with validation with the message from request
      return toast.warning(result.message);
    }

    setCar(result);
    toast.success(toastConstants.editSuccess);
  };

  const deleteModalHandler = async () => {
    try {
      const result = await rentingService.deleteCarById(id);
      if (result.message) {
        return toast.warning(result.message);
      }
      toast.success(toastConstants.deleteSuccess);
      navigate("/cars");
    } catch (error) {
      console.log(error);
    }
  };
  const rentHandler = async (startDate, endDate) => {
    try {
      const data = {
        isAvailable: false,
        rentalStartDate: new Date(startDate),
        rentalEndDate: new Date(endDate),
      };

      const result = await rentingService.rentCar(id, data);
      setCar(result);
      toast.success(`Successfully rented from ${startDate} to ${endDate}`);

      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  const addReview = async () => {
    const result = await reviewService.addReview(id, reviewText);

    if (result.message) {
      toast.warning(result.message);
    }

    result.owner = JSON.parse(localStorage.getItem("auth"));
    toast.success(toastConstants.addSuccess, { autoClose: 2000 });
    setReviews((state) => [...state, result]);
  };

  const editReview = async () => {
    const result = await reviewService.editReview(editingReviewId, reviewText);
    if (result.message) {
      console.log(result);
      return toast.warning(result.message);
    }

    toast.success(toastConstants.editSuccess);
    setReviews((state) => {
      return state.map((review) => {
        if (review._id === result._id) {
          result.owner = JSON.parse(localStorage.getItem("auth"));
          return result;
        }
        return review;
      });
    });

    reviewButton.textContent = reviewsConstant.addButton;
    reviewButton.style.background = reviewsConstant.addButtonBackground;
    reviewButton.style.color = reviewsConstant.addButtonColor;
    setIsEditMode(false);
  };
  const submitHandler = async (e) => {
    e.preventDefault();

    if (!reviewText) {
      return toast.warning(reviewsConstant.emptyForm, { autoClose: 2000 });
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
      return toast.warning(result.message);
    }

    toast.success(toastConstants.deleteSuccess, { autoClose: 2000 });
    setReviews((state) => state.filter((review) => review._id !== id));
  };

  const editReviewHandler = async (id, text) => {
    setReviewText(text);
    setIsEditMode(true);
    setEditingReviewId(id);

    reviewButton.textContent = reviewsConstant.editButton;
    reviewButton.style.background = reviewsConstant.editButtonBackground;
    reviewButton.style.color = reviewsConstant.editButtonColor;
  };

  const closeModal = () => {
    setShowDeleteModal(false);
    setShowEditModal(false);
  };

  return (
    <div className={styles.siteSection}>
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
              <h3 className={styles.detailsHeading3}>
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
              <p>{car.fuelType}</p>
              <p>{car.isAvailable ? "Available" : "Rented"}</p>
              <p>{car.address}</p>
              <hr />
              {canUserManage(car._ownerId) && (
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
                    onClick={editModalClick}
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
        <section className={styles.rentinForm}>
          {isAuthenticated && car.isAvailable && (
            <RentForm rentHandler={rentHandler} />
          )}
        </section>
        <h3>Reviews</h3>
        <section className="section">
          {isAuthenticated && (
            <Form className={styles.reviewForm} onSubmit={submitHandler}>
              <Form.Control
                className={styles.reviewInput}
                type="textarea"
                name="review"
                value={reviewText}
                onChange={(e) => setReviewText(e.target.value)}
                placeholder="Place your review here..."
              ></Form.Control>
              <Button id="review" className="btn btn-primary" type="submit">
                Add Review
              </Button>
            </Form>
          )}
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
