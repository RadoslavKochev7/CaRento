import { Link, useNavigate } from "react-router-dom";
import styles from "./Header.module.css";
import { useContext } from "react";
import { authContext } from "../../contexts/AuthContext";
import * as pathConstants from "../../constants/pathConstants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  const { isAuthenticated, username } = useContext(authContext);
  const navigate = useNavigate();

  return (
    <header className="site-navbar site-navbar-target" role="banner">
      <div className="container">
        <div className="row align-items-center position-relative">
          <div className="col-3">
            <div className="site-logo">
              <Link to={pathConstants.home}>
                <strong className={styles.logo}>CaRento</strong>
              </Link>
            </div>
          </div>

          <div className="col-9  text-right">
            <span className="d-inline-block d-lg-none">
              <Link to={pathConstants.home} className=" site-menu-toggle js-menu-toggle py-5">
                <span className="icon-menu h3 text-black"></span>
              </Link>
            </span>

            <nav
              className="site-navigation text-right ml-auto d-none d-lg-block"
              role="navigation"
            >
              <ul className="site-menu main-menu js-clone-nav ml-auto ">
                <li className="active">
                  <Link to={pathConstants.home} className={styles.navItem}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to={pathConstants.cars} className={styles.navItem}>
                    Listing
                  </Link>
                </li>
                <li>
                  <Link to={pathConstants.about} className={styles.navItem}>
                    About
                  </Link>
                </li>
                {isAuthenticated && (
                  <>
                    <li>
                      <Link to={pathConstants.mine} className={styles.navItem}>
                        My Cars
                      </Link>
                    </li>
                    <li>
                      <Link to={pathConstants.rentings} className={styles.navItem}>
                        My Rentings
                      </Link>
                    </li>
                    <li>
                      <Link to={pathConstants.logout} className={styles.navItem}>
                        Logout
                      </Link>
                    </li>
                    <span className={styles.userSpan}>
                      Welcome, {username}!
                    </span>
                  </>
                )}
                {!isAuthenticated && (
                  <>
                    <li>
                      <Link to={pathConstants.register} className={styles.navItem}>
                        Register
                      </Link>
                    </li>
                    <li>
                      <Link to={pathConstants.login} className={styles.navItem}>
                        Login
                      </Link>
                    </li>
                  </>
                )}
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <Link className={`btn btn-secondary ${styles.backBtn}`} onClick={() => navigate(-1)}>
      <FontAwesomeIcon icon={faArrowLeft} /> Go Back
      </Link>
    </header>
  );
}
