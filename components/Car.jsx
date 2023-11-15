import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

export default function Car(props) {
  const {
    _id,
    rentalPrice,
    make,
    model,
    year,
    imageUrl,
    carType,
    horsePower,
    description,
    mileage,
  } = props;
  const { country, city, address } = props.location;

  return (
    <div className="col-md-6 col-lg-4 mb-4">
      <span style={{ display: "none"}}>{_id}</span>
      <div
        className="listing d-block  align-items-stretch"
        style={{
          background: "#e3dfda",
        }}
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
          <div className="listing-feature pr-4">
            <span className="caption">
              <b>Year:</b> {year}
            </span>
            <span className="caption">
              <b>HP :</b> {horsePower}
            </span>
            <span className="caption">
              <b>Mileage: </b>
              {mileage}
            </span>
          </div>

          <div>
            <div className="d-block d-md-flex border-bottom">
              <span>
                <b>Location:</b> {city}, {address}
              </span>
            </div>
          </div>
          <span className="caption">
            <b>Description:</b>
          </span>
          <p>{description}</p>
          <hr />
          <div className="button-group" style={{ padding: '4px'}}>
            <button className="btn btn-success">
            <span>
                <FontAwesomeIcon icon={faPlus} />
              </span>
              Rent Now</button>
            <button className="btn btn-danger">
              <span>
                <FontAwesomeIcon icon={faTrashCan} />
              </span>
              Delete
            </button>
            <button className="btn btn-warning">
              <span>
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
