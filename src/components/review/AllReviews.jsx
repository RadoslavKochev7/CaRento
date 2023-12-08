import { useEffect, useState } from "react";
import { authString } from "../../constants/globalConstants";
import { Button, Form } from "react-bootstrap";
import { toast } from "react-toastify";
import Review from "./Review";
import styles from "./AllReviews.module.css";

import * as reviewService from "../../services/reviewsService";
import * as toastConstants from "../../constants/toastConstants";

export default function AllReviews() {
  const [reviews, setReviews] = useState([]);
  const [reviewText, setReviewText] = useState("");
  const [reviewId, setReviewId] = useState("");
  const [showEditInput, setShowEditInput] = useState(false);

  useEffect(() => {
    reviewService
      .getAll()
      .then((result) => setReviews(result))
      .catch((err) => console.log(err));
  }, []);

  const deleteReviewHandler = async (id) => {
    const result = await reviewService.deleteReview(id);
    if (result.message) {
      return toast.warning(result.message);
    }

    toast.success(toastConstants.deleteSuccess, { autoClose: 2000 });
    setReviews((state) => state.filter((review) => review._id !== id));
  };

  const editClickHandler = (id, text) => {
    setShowEditInput(true);
    setReviewText(text);
    setReviewId(id);
  };

  const editHandler = async (e) => {
    e.preventDefault();

    const result = await reviewService.editReview(reviewId, reviewText);
    if (result.message) {
      return toast.warning(result.message);
    }

    toast.success(toastConstants.editSuccess);
    setReviews((state) => {
      return state.map((review) => {
        if (review._id === result._id) {
          result.owner = JSON.parse(localStorage.getItem(authString));
          return result;
        }
        return review;
      });
    });

    setShowEditInput(false);
  };

  return (
    <div className="container">
      <h2 className="text-center mb-4 mt-1">
        <b>All Reviews</b>
      </h2>
      {showEditInput && (
        <Form className={styles.reviewForm} onSubmit={editHandler}>
          <Form.Control
            className={styles.reviewInput}
            type="textarea"
            name="review"
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
            placeholder="Place your review here..."
          ></Form.Control>
          <Button id="review" className="btn btn-warning" type="submit">
            Edit Review
          </Button>
        </Form>
      )}
      <div className={styles.reviewsRow}>
        {reviews &&
          reviews.map((review) => (
            <Review
              key={review._id}
              {...review}
              deleteHandler={deleteReviewHandler}
              editHandler={editClickHandler}
            />
          ))}
        {!reviews && <h1>No reviews</h1>}
      </div>
    </div>
  );
}
