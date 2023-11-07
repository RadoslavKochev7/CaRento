import Car from "./Car";
import { useEffect, useState } from "react";
import * as rentingService from "../src/services/rentingService";

export default function CarListing() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    rentingService.getAllCars().then((result) => setCars(result));
  }, []);

  return (
    <div className="site-section bg-light">
      <h1 className="heading text-center">Best Available Cars For Rent!</h1>
      <h2 style={{ textAlign: "center" }}>
        <b>You have an extra car, which you don't want to sell ? <br/>That's fine, just
        press the button below and leave it for rent.</b>
      </h2>
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            {/* <h2 className="section-heading">
              <strong>Best Cars</strong>
            </h2> */}
            <button className="btn btn-info" style={{ marginLeft: 30, marginBottom: 30 }}>
              + Add Car
            </button>

            {/* <h4 className="mb-6 text-center">Available cars for renting</h4> */}
          </div>
        </div>

        <div className="row">
          {cars.map((car) => (
            <Car key={car.id} {...car} />
          ))}

          {/* <div className="col-md-6 col-lg-4 mb-4">
            <div className="listing d-block  align-items-stretch">
              <div className="listing-img h-100 mr-4">
                <img src="images/car_5.jpg" alt="Image" className="img-fluid" />
              </div>
              <div className="listing-contents h-100">
                <h3>Nissan Moco</h3>
                <div className="rent-price">
                  <strong>$389.00</strong>
                  <span className="mx-1">/</span>day
                </div>
                <div className="d-block d-md-flex mb-3 border-bottom pb-3">
                  <div className="listing-feature pr-4">
                    <span className="caption">Luggage:</span>
                    <span className="number">8</span>
                  </div>
                  <div className="listing-feature pr-4">
                    <span className="caption">Doors:</span>
                    <span className="number">4</span>
                  </div>
                  <div className="listing-feature pr-4">
                    <span className="caption">Passenger:</span>
                    <span className="number">4</span>
                  </div>
                </div>
                <div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quos eos at eum, voluptatem quibusdam.
                  </p>
                  <p>
                    <a href="#" className="btn btn-primary btn-sm">
                      Rent Now
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4 mb-4">
            <div className="listing d-block  align-items-stretch">
              <div className="listing-img h-100 mr-4">
                <img src="images/car_4.jpg" alt="Image" className="img-fluid" />
              </div>
              <div className="listing-contents h-100">
                <h3>Honda Fitta</h3>
                <div className="rent-price">
                  <strong>$389.00</strong>
                  <span className="mx-1">/</span>day
                </div>
                <div className="d-block d-md-flex mb-3 border-bottom pb-3">
                  <div className="listing-feature pr-4">
                    <span className="caption">Luggage:</span>
                    <span className="number">8</span>
                  </div>
                  <div className="listing-feature pr-4">
                    <span className="caption">Doors:</span>
                    <span className="number">4</span>
                  </div>
                  <div className="listing-feature pr-4">
                    <span className="caption">Passenger:</span>
                    <span className="number">4</span>
                  </div>
                </div>
                <div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quos eos at eum, voluptatem quibusdam.
                  </p>
                  <p>
                    <a href="#" className="btn btn-primary btn-sm">
                      Rent Now
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4 mb-4">
            <div className="listing d-block  align-items-stretch">
              <div className="listing-img h-100 mr-4">
                <img src="images/car_3.jpg" alt="Image" className="img-fluid" />
              </div>
              <div className="listing-contents h-100">
                <h3>Skoda Laura</h3>
                <div className="rent-price">
                  <strong>$389.00</strong>
                  <span className="mx-1">/</span>day
                </div>
                <div className="d-block d-md-flex mb-3 border-bottom pb-3">
                  <div className="listing-feature pr-4">
                    <span className="caption">Luggage:</span>
                    <span className="number">8</span>
                  </div>
                  <div className="listing-feature pr-4">
                    <span className="caption">Doors:</span>
                    <span className="number">4</span>
                  </div>
                  <div className="listing-feature pr-4">
                    <span className="caption">Passenger:</span>
                    <span className="number">4</span>
                  </div>
                </div>
                <div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quos eos at eum, voluptatem quibusdam.
                  </p>
                  <p>
                    <a href="#" className="btn btn-primary btn-sm">
                      Rent Now
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4 mb-4">
            <div className="listing d-block  align-items-stretch">
              <div className="listing-img h-100 mr-4">
                <img src="images/car_2.jpg" alt="Image" className="img-fluid" />
              </div>
              <div className="listing-contents h-100">
                <h3>Mazda LaPuta</h3>
                <div className="rent-price">
                  <strong>$389.00</strong>
                  <span className="mx-1">/</span>day
                </div>
                <div className="d-block d-md-flex mb-3 border-bottom pb-3">
                  <div className="listing-feature pr-4">
                    <span className="caption">Luggage:</span>
                    <span className="number">8</span>
                  </div>
                  <div className="listing-feature pr-4">
                    <span className="caption">Doors:</span>
                    <span className="number">4</span>
                  </div>
                  <div className="listing-feature pr-4">
                    <span className="caption">Passenger:</span>
                    <span className="number">4</span>
                  </div>
                </div>
                <div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quos eos at eum, voluptatem quibusdam.
                  </p>
                  <p>
                    <a href="#" className="btn btn-primary btn-sm">
                      Rent Now
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4 mb-4">
            <div className="listing d-block  align-items-stretch">
              <div className="listing-img h-100 mr-4">
                <img src="images/car_1.jpg" alt="Image" className="img-fluid" />
              </div>
              <div className="listing-contents h-100">
                <h3>Buick LaCrosse</h3>
                <div className="rent-price">
                  <strong>$389.00</strong>
                  <span className="mx-1">/</span>day
                </div>
                <div className="d-block d-md-flex mb-3 border-bottom pb-3">
                  <div className="listing-feature pr-4">
                    <span className="caption">Luggage:</span>
                    <span className="number">8</span>
                  </div>
                  <div className="listing-feature pr-4">
                    <span className="caption">Doors:</span>
                    <span className="number">4</span>
                  </div>
                  <div className="listing-feature pr-4">
                    <span className="caption">Passenger:</span>
                    <span className="number">4</span>
                  </div>
                </div>
                <div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quos eos at eum, voluptatem quibusdam.
                  </p>
                  <p>
                    <a href="#" className="btn btn-primary btn-sm">
                      Rent Now
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
