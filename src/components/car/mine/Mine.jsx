import { useEffect, useState } from "react";
import { useContext } from "react";
import { authContext } from "../../../contexts/AuthContext";
import { toast } from "react-toastify";
import Car from "../car/Car";
import * as rentingService from "../../../services/rentingService";
import * as toastConstants from "../../../constants/toastConstants";

export default function Mine() {
  const { userId } = useContext(authContext);
  const [cars, setCars] = useState([]);

  useEffect(() => {
    rentingService
      .getMyCars(userId)
      .then((response) => setCars(response))
      .catch((err) => console.log(err));
  }, [userId]);

  const handleDelete = async (carId) => {
    try {
      await rentingService.deleteCarById(carId);
      setCars((state) => state.filter((car) => car._id !== carId));
      toast.success(toastConstants.deleteSuccess);
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = async (carId, carData) => {
    const result = await rentingService.editCarById(carId, carData);
    if (result.message) {
      // toast validation
      return toast.error(toastConstants.editError + " " + result.message);
    }

    setCars((state) => {
      return state.map((car) => {
        if (car._id === result._id) {
          return result;
        }
        return car;
      });
    });

    toast.success(toastConstants.editSuccess);
  };

  return (
    <div className="page-wrapper">
      <div className="site-section bg-light">
        <h1 className="heading text-center mb-xl-4">My Cars</h1>
        <div className="container">
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
    </div>
  );
}
