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

              <form className="trip-form">
                <div className="row align-items-center">
                  <div className="mb-3 mb-md-0 col-md-3">
                    <select
                      name=""
                      id=""
                      className="custom-select form-control"
                    >
                      <option value="">Select Type</option>
                      <option value="">Ferrari</option>
                      <option value="">Toyota</option>
                      <option value="">Ford</option>
                      <option value="">Lamborghini</option>
                    </select>
                  </div>
                  <div className="mb-3 mb-md-0 col-md-3">
                    <div className="form-control-wrap">
                      <input
                        type="text"
                        id="cf-3"
                        placeholder="Pick up"
                        className="form-control datepicker px-3"
                      />
                      <span className="icon icon-date_range"></span>
                    </div>
                  </div>
                  <div className="mb-3 mb-md-0 col-md-3">
                    <div className="form-control-wrap">
                      <input
                        type="text"
                        id="cf-4"
                        placeholder="Drop off"
                        className="form-control datepicker px-3"
                      />
                      <span className="icon icon-date_range"></span>
                    </div>
                  </div>
                  <div className="mb-3 mb-md-0 col-md-3">
                    <input
                      type="submit"
                      value="Search Now"
                      className="btn btn-primary btn-block py-3"
                    />
                  </div>
                </div>
              </form>
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
                  <p>
                    Enjoy driving with the best rental cars
                  </p>
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
                <strong>
                  You can easily avail our promo for renting a car.
                </strong>
              </h3>
              <p className="mb-5">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Repudiandae, explicabo iste a labore id est quas, doloremque
                veritatis! Provident odit pariatur dolorem quisquam,
                voluptatibus voluptates optio accusamus, vel quasi quidem!
              </p>

              <p>
                <a href="#" className="btn btn-primary">
                  Meet them now
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
