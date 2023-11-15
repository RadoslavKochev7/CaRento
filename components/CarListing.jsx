import Car from "./Car";
import { useEffect, useState } from "react";
import * as rentingService from "../src/services/rentingService";
import AddCarModalForm from "./AddCarModalForm";

export default function CarListing() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    rentingService
      .getAllCars()
      .then((result) => setCars(result))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="site-section bg-light">
      <h1 className="heading text-center">Best Available Cars For Rent!</h1>
      <h2 style={{ textAlign: "center" }}>
        <b>
          You have an extra car, which you don't want to sell ? <br />
          That's fine, just press the button below and leave it for rent.
        </b>
      </h2>
      <div className="container">
        <div className="row">
          <div className="col-lg-7" style={{ marginLeft: 30, marginBottom: 30 }}>
            <AddCarModalForm />
          </div>
        </div>

        <div className="row">
          {cars.map((car) => (
            
            <Car key={car._id} {...car} />
          ))}
        </div>
      </div>
    </div>
  );
}
