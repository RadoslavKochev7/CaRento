import { useEffect, useState } from "react";
import * as rentingService from "../../../src/services/rentingService";
import { useContext } from "react";
import { authContext } from "../../../src/contexts/AuthContext";
import Car from "../Car";

export default function Mine() {
  const { auth } = useContext(authContext);
  const [cars, setCars] = useState([]);
  console.log(auth?.data?._id);
  console.log(!!cars);

  useEffect(() => {
    rentingService
      .getMyCars(auth.data._id)
      .then((response) => setCars(response))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="page-wrapper">
      <div className="site-section bg-light">
        <h1 className="heading text-center">My Cars</h1>

        <div className="container">
          <div className="row">
            {cars.map((car) => {
              <Car
                key={car._id}
                {...car}
                //   onDeleteHandler={handleDelete}
              />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
