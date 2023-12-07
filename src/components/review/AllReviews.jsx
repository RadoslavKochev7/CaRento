import { useEffect, useState } from "react";
import Review from "./Review";
import * as reviewService from "../../services/reviewsService";
import * as toastConstants from "../../constants/toastConstants";
import { toast } from "react-toastify";

export default function AllReviews() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    reviewService
      .getAll()
      .then((result) => setReviews(result))
      .catch((err) => console.log(err));
    console.log(reviews);
  }, []);

  const deleteReviewHandler = async (id) => {
    const result = await reviewService.deleteReview(id);
    if (result.message) {
      return toast.warning(result.message);
    }

    toast.success(toastConstants.deleteSuccess, { autoClose: 2000 });
    setReviews((state) => state.filter((review) => review._id !== id));
  };

  return (
    <div className="container">
      <h2>All Reviews</h2>
      {reviews &&
        reviews.map((review) => (
          <Review
            key={review._id}
            {...review}
            deleteHandler={deleteReviewHandler}
          />
        ))}
      {!reviews && <h1>No reviews</h1>}
    </div>
  );
}
