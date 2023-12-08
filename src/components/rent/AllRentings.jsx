import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { details } from "../../constants/pathConstants";
import { Table } from "react-bootstrap";
import * as rentingService from "../../services/rentingService";

export default function AllRentings() {
  const [rentingsData, setRentingsData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    rentingService
      .getAllCars()
      .then((response) => setRentingsData(response))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      {rentingsData && (
        <>
          <h2 className="text-center mt-1 mb-4">
            <b>All Rented Cars</b>
          </h2>
          <Table striped bordered hover className="mt-2">
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
                <th>Owner</th>
                <th>Owner Id</th>
              </tr>
            </thead>
            <tbody>
              {rentingsData
                .filter((rd) => rd.isAvailable === false)
                .map((rd, index) => (
                  <>
                    <tr key={rd._id}>
                      <td>{++index}.</td>
                      <td>
                        <img
                          src={
                            rd.imageUrl.startsWith("images")
                              ? `../../${rd.imageUrl}`
                              : rd.imageUrl
                          }
                          height={100}
                          width={150}
                          alt="image"
                          onClick={() =>
                            navigate(details.replace(":id", rd._id))
                          }
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
                      <td>{rd.renterEmail}</td>
                      <td>{rd.renterId}</td>
                    </tr>
                  </>
                ))}
            </tbody>
          </Table>
        </>
      )}
      {!rentingsData.length && (
        <div className="container mb-xl-4">
          <h2>No rentings</h2>{" "}
        </div>
      )}
    </>
  );
}
