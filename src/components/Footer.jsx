import { Link } from "react-router-dom";
import { about, cars, home, login, register } from "../constants/pathConstants";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <h2 className="footer-heading mb-4">Contact Us</h2>
            <p>
              Have questions or need assistance? Reach out to our friendly
              customer support team.
            </p>
            <ul className="list-unstyled social">
              <li>
                <Link to={home}>
                  <span className="icon-facebook"></span>
                </Link>
              </li>
              <li>
                <Link to={home}>
                  <span className="icon-instagram"></span>
                </Link>
              </li>
              <li>
                <Link to={home}>
                  <span className="icon-twitter"></span>
                </Link>
              </li>
              <li>
                <Link to={home}>
                  <span className="icon-linkedin"></span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="ml-auto">
            <div className="row">
              <div className="inline-flex">
                <h2 className="footer-heading mb-4">Quick Links</h2>
                <ul className="list-unstyled">
                  <li>
                    <Link to={about}>About Us</Link>
                  </li>
                  <li>
                    <Link to={login}>Login Page</Link>
                  </li>
                  <li>
                    <Link to={register}>Register Page</Link>
                  </li>
                  <li>
                    <Link to={cars}>Catalog</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
        </div>

        <div className="position-relative text-center" style={{  bottom: 200, left: 40}}>
          <div>
            <div>
              CaRento - Your Journey, Your Way © {new Date().getFullYear()}
              CaRento. All rights reserved.
            </div>
            <div className="border-top pt-5">
              <p>
                Copyright &copy;
                <script>document.write(new Date().getFullYear());</script> All
                rights reserved | This template is made with{" "}
                <i className="icon-heart text-danger" aria-hidden="true"></i> by{" "}
                <a href="https://colorlib.com" target="_blank">
                  Colorlib
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
