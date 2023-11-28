import { useEffect, useState } from "react";
import * as rentingService from "../../../services/rentingService";
import { useContext } from "react";
import { authContext } from "../../../contexts/AuthContext";
import Car from "../Car";

export default function Mine() {
  const { userId } = useContext(authContext);
  const [cars, setCars] = useState([]);

  const handleDelete = async (carId) => {
    setCurrentCarId(carId);

    await rentingService.deleteCarById(carId);
    setCars((state) => state.filter((car) => car._id !== currentCarId));
  };

  const handleEdit = async (carId, carData) => {
    const result = await rentingService.editCarById(carId, carData);
    if (result.message) {
      // throw validation
      return alert("not ok")
    }

    setCars((state) => {
        return state.map((car) => {
          if (car._id === result._id) {
            return result;
          }
          return car;
        });
      });
  };

  useEffect(() => {
    rentingService
      .getMyCars(userId)
      .then((response) => setCars(response))
      .catch((err) => console.log(err));
  }, [userId]);

  return (
    <div className="page-wrapper">
      <div className="site-section bg-light">
        <h1 className="heading text-center">My Cars</h1>

        <div className="row">
          {cars &&
            cars.map((car) => (
              <Car
                key={car._id}
                {...car}
                onDeleteHandler={handleDelete}
                onEditHandler={handleEdit}
              />
            ))}

          {cars?.length === 0 && (
            <div className="heading text-center">
              <h3>You have no cars for renting!</h3>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}