export default function Hero() {
    return (
        <div className="hero">
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
    )
}