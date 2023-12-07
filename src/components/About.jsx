import { Link } from "react-router-dom";
import { cars } from "../constants/pathConstants";

export default function About() {
  return (
    <>
      <h1 className="heading text-center">About Us</h1>
      <div className="site-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mb-5 mb-lg-0 order-lg-2">
              <img
                src="images/hero_2.jpg"
                alt="Image"
                className="img-fluid rounded"
              />
            </div>
            <section className="col-lg-4 mr-auto">
              <h2>CaRento</h2>
              <p>
                CaRento is a leading name in the car rental industry, dedicated
                to offering seamless and reliable services to customers
                worldwide. Whether you're a business traveler, a family on
                vacation, or an adventurous solo explorer, we have the right car
                to suit your needs.
              </p>
              <p>
                Thank you for choosing CaRento. Let's make every mile count!
              </p>
            </section>
          </div>
        </div>
      </div>

      <div className="site-section bg-light">
        <div className="container">
          <div className="row justify-content-center text-center mb-5 section-2-title">
            <div className="col-md-6">
              <h2 className="mb-4">Meet Our Team</h2>
            </div>
          </div>
          <div className="row align-items-stretch">
            <div className="col-lg-4 col-md-6 mb-5">
              <div className="post-entry-1 h-100 person-1">
                <img
                  src="images/person_1.jpg"
                  alt="Image /"
                  className="img-fluid"
                />

                <div className="post-entry-1-contents">
                  <span className="meta">Chief Technology Officer (CTO)</span>
                  <h2>Daniel Chang</h2>
                  <p>
                    Daniel is the tech wizard at CaRento, overseeing the
                    seamless integration of cutting-edge technology into our
                    services. With a background in software engineering, he
                    ensures that our website and mobile app provide a
                    user-friendly experience for all customers.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-5">
              <div className="post-entry-1 h-100 person-1">
                <img
                  src="images/person_2.jpg"
                  alt="Image /"
                  className="img-fluid"
                />

                <div className="post-entry-1-contents">
                  <span className="meta">Head of Customer Experience</span>
                  <h2>Olivia Mitchell</h2>
                  <p>
                    Olivia is dedicated to ensuring that every interaction with
                    CaRento is a positive one. As the Head of Customer
                    Experience, she leads a team focused on providing excellent
                    service, resolving inquiries, and making sure your car
                    rental experience exceeds expectations and provides you with
                    the best service.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-5">
              <div className="post-entry-1 h-100 person-1">
                <img
                  src="images/person_3.jpg"
                  alt="Image /"
                  className="img-fluid"
                />

                <div className="post-entry-1-contents">
                  <span className="meta"> CEO and Founder</span>
                  <h2>Emma Rodriguez</h2>
                  <p>
                    Emma Rodriguez - CEO and Founder Meet Emma, the visionary
                    leader behind CaRento. With a passion for travel and a keen
                    business acumen, Emma founded CaRento to revolutionize the
                    car rental industry. Her commitment to customer satisfaction
                    and innovation drives the company's success.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="site-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <img
                src="images/hero_1.jpg"
                alt="Image"
                className="img-fluid rounded"
              />
            </div>
            <div className="col-lg-4 ml-auto">
              <h2 className="text-center">Our Mission</h2>
              <p>
                Our mission at CaRento is to make car rental a hassle-free
                experience. We strive to provide our customers with a wide range
                of options, from compact cars for urban escapades to spacious
                SUVs for family getaways. Our commitment to quality service,
                transparency, and customer satisfaction sets us apart in the
                competitive world of car rentals.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="site-section bg-primary py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7 mb-4 mb-md-0">
              <h2 className="mb-0 text-white">What are you waiting for?</h2>
              <p className="mb-0 opa-7">Check out our cars.</p>
            </div>
            <div className="col-lg-5 text-md-right">
              <Link to={cars} className="btn btn-primary btn-white">
                Rent a car now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
