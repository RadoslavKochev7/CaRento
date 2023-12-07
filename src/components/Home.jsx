import { Link } from "react-router-dom";
import { register } from "../constants/pathConstants";

export default function Home() {
  return (
    <>
      <div
        className="hero"
        style={{ backgroundImage: "url('images/hero_1_a.jpg')" }}
      >
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-10">
              <div className="row mb-5">
                <div className="col-lg-7 intro">
                  <h1>
                    <strong>Rent a car</strong> is within your finger tips.
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="site-section">
        <div className="container">
          <h2 className="section-heading">
            <strong>How it works?</strong>
          </h2>
          <p className="mb-5">Easy steps to get you started</p>

          <div className="row mb-5">
            <div className="col-lg-4 mb-4 mb-lg-0">
              <div className="step">
                <span>1</span>
                <div className="step-inner">
                  <span className="number text-primary">01.</span>
                  <h3>Sign Up or Login</h3>
                  <p>Follow the links for login or sign-up</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-4 mb-lg-0">
              <div className="step">
                <span>2</span>
                <div className="step-inner">
                  <span className="number text-primary">02.</span>
                  <h3>Choose</h3>
                  <p>Select a car from our map or catalogue</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-4 mb-lg-0">
              <div className="step">
                <span>3</span>
                <div className="step-inner">
                  <span className="number text-primary">03.</span>
                  <h3>Enjoy</h3>
                  <p>Enjoy driving with the best rental cars</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="site-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7 text-center order-lg-2">
              <div className="img-wrap-1 mb-5">
                <img
                  src="images/feature_01.png"
                  alt="Image"
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="col-lg-4 ml-auto order-lg-1">
              <h3 className="mb-4 section-heading">
                <strong>Why Choose CaRento?</strong>
              </h3>
              <p className="mb-5">
                With CaRento, you have the freedom to explore the world. We
                operate in various locations across the globe, ensuring that you
                can rely on us wherever your travels take you. Our extensive
                fleet comprises vehicles of all sizes and types. Whether you
                need a fuel-efficient sedan, a rugged 4x4, or a luxurious
                convertible, CaRento has you covered. Booking a car with CaRento
                is a breeze. Our user-friendly website and mobile app make the
                reservation process quick and straightforward. Just a few
                clicks, and you're ready to hit the road.
              </p>

              <h4>Not having an account ?</h4>
              <p>
                <Link to={register} className="btn btn-primary">
                  Register Now
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
