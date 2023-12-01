import { faEdit, faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ButtonGroup } from "react-bootstrap";

export const Review = (props) => {
  const deleteClickHandler = () => {
    props.deleteHandler(props._id);
  };

  const editClickHandler = () => {
    props.editHandler(props._id, props.text);
  };

  return (
    <div>
      <div style={{ width: "100%", padding: "20px 20px 20px 0" }}>
        <div className="testimonial-2">
          <blockquote className="mb-4">
            <p>{props.text}</p>
          </blockquote>
          <div
            style={{ justifyContent: "space-between" }}
            className="d-flex v-card align-items-center"
          >
            <div className="author-name">
              <span className="d-block">{props.owner.username}</span>
              <span>{props.owner.email}</span>
            </div>
            <ButtonGroup>
            <button
                className="btn btn-outline-warning"
                onClick={editClickHandler}
                data-toggle="tooltip" title="Edit"
              >
                <span>
                  <FontAwesomeIcon icon={faEdit} />
                </span>
              </button>
              <button
                className="btn btn-outline-danger"
                onClick={deleteClickHandler}
                data-toggle="tooltip" title="Delete"
              >
                <span>
                  <FontAwesomeIcon icon={faTrashCan} />
                </span>
              </button>
            </ButtonGroup>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
