import { useEffect, useState } from "react";
import { getCityCoordinates } from "../../../services/locationService";
import { toast } from "react-toastify";
import Car from "../car/Car";
import Search from "../../Search";
import AddCarModalForm from "../addCarModalForm/AddCarModalForm";
import RentoMap from "../../map/RentoMap";
import styles from "./CarListing.module.css";
import * as carConstants from "../../../constants/toastConstants";
import * as rentingService from "../../../services/rentingService";

export default function CarListing() {
  const [cars, setCars] = useState([]);
  const [allCars, setAllCars] = useState([]);

  useEffect(() => {
    rentingService
      .getAllCars()
      .then((result) => {
        setAllCars(result);
        setCars(result);
      })
      .catch((err) => console.error(err));

    window.scrollTo(0, 0);
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
      toast.success(carConstants.editSuccess);
    }
  };

  const handleDelete = async (carId) => {
    const result = await rentingService.deleteCarById(carId);
    if (result.message) {
      return toast.error(result.message);
    }
    setCars((state) => state.filter((car) => car._id !== carId));
    toast.success(carConstants.deleteSuccess);
  };

  const submitHandler = async (car) => {
    const coordinates = await getCityCoordinates(car.city, car.country);
    if (coordinates.length === 0) {
      return toast.warning(carConstants.invalidCoordinates);
    }

    car.longitude = coordinates[0]?.longitude;
    car.latitude = coordinates[0]?.latitude;
    const result = await rentingService.addCar(car);

    if (result.message) {
      return toast.error(carConstants.invalidCoordinates);
    }
    setCars((state) => [...state, result]);
    toast.success(carConstants.addSuccess);
  };

  const searchHandler = async (searchPattern) => {
    const filteredData = cars.filter((car) => {
      return Object.values(car)
        .join("")
        .toLowerCase()
        .includes(searchPattern.toLowerCase());
    });

    if (searchPattern && filteredData.length > 0) {
      setCars(filteredData);
    } else {
      setCars(allCars);
    }
  };

  return (
    <div className="page-wrapper">
      <div className="site-section bg-light">
        <h1 className="heading text-center">Best Cars For Rent</h1>
        <h2 className={styles.listingH2}>
          <b>
            You have an extra car, which you don't want to sell ? <br />
            That's fine, just press the button below and leave it for rent.
          </b>
        </h2>
        <div className="container">
          <div className={styles.searchRow}>
            <div className={styles.listingCol}>
              <AddCarModalForm onSubmit={submitHandler} />
            </div>
            <div className={styles.listingCol}>
              <Search filterHandler={searchHandler} />
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
