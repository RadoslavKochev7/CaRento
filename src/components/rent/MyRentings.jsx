import { useContext, useEffect, useState } from "react";
import { authContext } from "../../contexts/AuthContext";
import * as rentingService from "../../services/rentingService";
import { Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { details } from "../../constants/pathConstants";

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

  console.log(rentingsData);
  return (
    <>
      {rentingsData && (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Make</th>
              <th>Model</th>
              <th>Price</th>
              <th>Fuel Type</th>
              <th>Mileage</th>
              <th>Horse Power</th>
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
                </tr>
              </>
            ))}
            {/* <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Larry the Bird</td>
              <td>@twitter</td>
            </tr> */}
          </tbody>
        </Table>
      )}
      {!rentingsData && <h2>No rentings</h2>}
    </>
  );
}
