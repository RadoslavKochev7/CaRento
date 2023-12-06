import { useContext, useEffect, useState } from "react";
import { authContext } from "../../contexts/AuthContext";
import { Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { details } from "../../constants/pathConstants";
import { toast } from "react-toastify";
import { returnSuccess } from "../../constants/toastConstants";
import * as rentingService from "../../services/rentingService";

export default function MyRentings() {
  const { userId } = useContext(authContext);
  const [rentingsData, setRentingsData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    rentingService
      .getMyRentings(userId)
      .then((response) => setRentingsData(response))
      .catch((err) => console.log(err));
  }, [userId]);

  const returnHandler = async (e) => {
    const carId = e.target.id;
    const data = {
      isAvailable: true,
      rentalStartDate: "",
      rentalEndDate: "",
      renterId: "",
      renterEmail: "",
    };

    try {
      const result = await rentingService.returnCar(carId, data);
      if (result.message) {
        return toast.warning(result.message);
      }

      setRentingsData((state) => state.filter((data) => data._id !== carId));
      toast.success(returnSuccess, { autoClose: 2000});
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {rentingsData && (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>№</th>
              <th>Image</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Make</th>
              <th>Model</th>
              <th>Price</th>
              <th>Fuel Type</th>
              <th>Mileage</th>
              <th>Horse Power</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {rentingsData.map((rd, index) => (
              <>
                <tr key={rd._id}>
                  <td>{++index}.</td>
                  <td>
                    <img
                      src={rd.imageUrl}
                      height={100}
                      width={150}
                      alt="image"
                      onClick={() => navigate(details.replace(":id", rd._id))}
                    />
                  </td>
                  <td>{rd.rentalStartDate}</td>
                  <td>{rd.rentalEndDate}</td>
                  <td>{rd.make}</td>
                  <td>{rd.model}</td>
                  <td>{rd.rentalPrice} $</td>
                  <td>{rd.fuelType}</td>
                  <td>{rd.mileage} km</td>
                  <td>{rd.horsePower} hp</td>
                  <td>
                    <button
                      type="button"
                      id={rd._id}
                      className="btn btn-info"
                      onClick={returnHandler}
                    >
                      Return
                    </button>
                  </td>
                </tr>
              </>
            ))}
          </tbody>
        </Table>
      )}
      {!rentingsData.length && <h2>No rentings</h2>}
    </>
  );
}
