export default function carDataDetailsBody({ carData }) {
  return (
    <>
      <li className="list-unstyled rent-price">
        <span>
          <b>Price:</b>
        </span>
        <span className="mx-1">{carData.rentalPrice}$ /</span>day
      </li>

      <li className="listing-feature">
        <span className="caption">
          <b>Year:</b> {carData.year}
        </span>
      </li>
      <li>
        <span className="caption">
          <b>HP:</b> {carData.horsePower && `${carData.horsePower} hp`}
        </span>
      </li>

      <li>
        <span className="caption">
          <b>Mileage: </b>
          {carData.mileage && `${carData.mileage} km`}
        </span>
      </li>

      <li>
        <span className="caption">
          <b>City:</b> {carData.city}
        </span>
      </li>

      <li>
        <span className="caption">
          <b>Country: </b>
          <span>{carData.country}</span>
        </span>
      </li>

      <li>
        <span className="caption">
          <b>Fuel Type: </b>
          {carData.fuelType}
        </span>
      </li>

      <li>
        <span className="caption">
          <b>State: </b>
          {carData.isAvailable ? "Available" : "Rented"}
        </span>
      </li>

      <li>
        <span className="caption">
          <span>
            <b>Address: </b>
          </span>
          <span>{carData.address}</span>
        </span>
      </li>

      <li>
        <span className="caption">
          <b>Description: </b>
          {carData.description}
        </span>
      </li>
    </>
  );
}
