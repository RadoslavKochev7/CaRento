export default function Car(props) {
    const { id, rentalPrice, make, model, year, imageUrl, carType, horsePower, description } = props;
    const { country, city, address } = props.location;

  return (
    <div className="col-md-6 col-lg-4 mb-4">
      <div
        className="listing d-block  align-items-stretch"
        style={{
          background: "#e3dfda",
        }}
      >
        <div className="listing-img h-100 mr-4">
          <img src={'images/car_5.jpg'} alt="Image" className="img-fluid" />
        </div>
        <div className="listing-contents h-100">
          <h3>{make} {model}</h3>
          <div className="rent-price">
            <span><b>Price:</b></span>
            <strong> {rentalPrice.toFixed(2)}$</strong>
            <span className="mx-1">/</span>day
          </div>
          <div className="listing-feature pr-4">
            <span className="caption">
              <b>Year:</b> {year}
            </span>
            <span><b>HP: </b></span>
            <span>{horsePower}</span>
            <span >
              <b>Type:</b> 
            </span>
            <span>{carType}</span>
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
          <p>{description}.</p>
          <hr />
          <p>
            <button className="btn btn-primary btn-sm">Rent Now</button>
          </p>
        </div>
      </div>
    </div>
  );
}
