import { faEdit, faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ButtonGroup } from "react-bootstrap";
import { canUserManage } from "../../utils/userManager";
import styles from "./Review.module.css";
import { format } from "date-fns";
import { dateFormat, reviewsDateFormat } from "../../constants/globalConstants";

export const Review = (props) => {
  const deleteClickHandler = () => {
    props.deleteHandler(props._id);
  };

  const editClickHandler = () => {
    props.editHandler(props._id, props.text);
  };

  return (
    <div>
      <div className={styles.reviewBody}>
        <div className="testimonial-2">
          <blockquote className="mb-4">
            <p>{props.text}</p>
          </blockquote>

          <div
            className={`d-flex v-card align-items-center ${styles.reviewDiv}`}
          >
            <div className="author-name">
              <span className="d-block">{props.owner.username}</span>
              <span>{props.owner.email}</span>
            </div>

            {canUserManage(props.owner._id) && (
              <ButtonGroup>
                <button
                  className="btn btn-outline-warning"
                  onClick={editClickHandler}
                  data-toggle="tooltip"
                  title="Edit"
                >
                  <span>
                    <FontAwesomeIcon icon={faEdit} />
                  </span>
                </button>
                <button
                  className="btn btn-outline-danger"
                  onClick={deleteClickHandler}
                  data-toggle="tooltip"
                  title="Delete"
                >
                  <span>
                    <FontAwesomeIcon icon={faTrashCan} />
                  </span>
                </button>
              </ButtonGroup>
            )}
          </div>
          <span className="text-right">
            <i>{format(new Date(props._createdOn), reviewsDateFormat)}</i>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Review;
