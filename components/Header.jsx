import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="site-navbar site-navbar-target" role="banner">
      <div className="container">
        <div className="row align-items-center position-relative">
          <div className="col-3">
            <div className="site-logo">
              <Link to={"/"}>
                <strong>CarRental</strong>
              </Link>
            </div>
          </div>

          <div className="col-9  text-right">
            <span className="d-inline-block d-lg-none">
              <Link to={"/"} className=" site-menu-toggle js-menu-toggle py-5">
                <span className="icon-menu h3 text-black"></span>
              </Link>
            </span>

            <nav
              className="site-navigation text-right ml-auto d-none d-lg-block"
              role="navigation"
            >
              <ul className="site-menu main-menu js-clone-nav ml-auto ">
                <li className="active">
                  <Link to={"/"} className="nav-link">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to={"/cars"} className="nav-link">
                    Listing
                  </Link>
                </li>
                <li>
                  <Link to={"/cars/details"} className="nav-link">
                    Details
                  </Link>
                </li>
                <li>
                  <Link to={"testimonials.html"} className="nav-link">
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link to={"/login"} className="nav-link">
                    Login
                  </Link>
                </li>
                <li>
                  <Link to={"/about"} className="nav-link">
                    About
                  </Link>
                </li>
                <li>
                  <Link to={"contact.html"} className="nav-link">
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
