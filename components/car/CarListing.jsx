import { useEffect, useState } from "react";
import Car from "./Car";
import AddCarModalForm from "./AddCarModalForm";
import * as rentingService from "../../src/services/rentingService";
import RentoMap from "../map/RentoMap";

export default function CarListing() {
  const [cars, setCars] = useState([]);
  const [currentCarId, setCurrentCarId] = useState(null);

  useEffect(() => {
    rentingService
      .getAllCars()
      .then((result) => setCars(result))
      .catch((err) => console.error(err));
  }, []);

 
  const handleDelete = async (carId) => {
    setCurrentCarId(carId);

    await rentingService.deleteCarById(carId);
    setCars((state) => state.filter((car) => car._id !== currentCarId));
  };

  const submitHandler = async (car) => {
    const result = await rentingService.addCar(car);
    setCars((state) => [...state, result]);
  };

  return (
    <div className="page-wrapper">
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
            <div
              className="col-lg-7"
              style={{ marginTop: 30, marginBottom: 30 }}
            >
              <AddCarModalForm onSubmit={submitHandler} />
            </div>
          </div>

          <div className="row">
            {cars.map((car) => (
              <Car
                key={car._id}
                {...car}
                onDeleteHandler={handleDelete}
              />
            ))}
          </div>
        </div>
      </div>
      <RentoMap carsData={cars} />
    </div>
  );
}
