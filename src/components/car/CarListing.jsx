import { useEffect, useState } from "react";
import { getCityCoordinates } from "../../services/locationService";
import { addSuccess, deleteSuccess, editSuccess, invalidCoordinates } from "../../constants/toastConstants";
import { toast } from "react-toastify";
import Car from "./Car";
import AddCarModalForm from "./addCarModalForm/AddCarModalForm";
import RentoMap from "../map/RentoMap";
import * as rentingService from "../../services/rentingService";

export default function CarListing() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    rentingService
      .getAllCars()
      .then((result) => setCars(result))
      .catch((err) => console.error(err));
  }, []);

  const handleEdit = async (carId, carData) => {
    if (!carData.latitude || !carData.longitude) {
      const coordinates = await getCityCoordinates(
        carData.city,
        carData.country
      );
      carData.latitude = coordinates[0].latitude;
      carData.longitude = coordinates[0].longitude;
    }
    const result = await rentingService.editCarById(carId, carData);

    if (result.message) {
      toast.error(result.message);
    } else {
      setCars((state) => {
        return state.map((car) => {
          if (car._id === result._id) {
            return result;
          }
          return car;
        });
      });
      toast.success(editSuccess);
    }
  };

  const handleDelete = async (carId) => {
    const result = await rentingService.deleteCarById(carId);
    if (result.message) {
      return toast.error(result.message);
    }
    setCars((state) => state.filter((car) => car._id !== carId));
    toast.success(deleteSuccess);
  };

  const submitHandler = async (car) => {
    const coordinates = await getCityCoordinates(car.city, car.country);
    if (!coordinates) {
      // add toast for fail
      return "Invalid coordinates";
    }
    car.longitude = coordinates[0]?.longitude;
    car.latitude = coordinates[0]?.latitude;
    const result = await rentingService.addCar(car);

    if (result.message) {
      return toast.error(invalidCoordinates);
    }
    setCars((state) => [...state, result]);
    toast.success(addSuccess);
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
                onEditHandler={handleEdit}
              />
            ))}
          </div>
        </div>
      </div>
      <RentoMap carsData={cars} />
    </div>
  );
}
