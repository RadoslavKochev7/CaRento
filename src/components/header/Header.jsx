import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import { useContext } from "react";
import { authContext } from "../../contexts/AuthContext";

export default function Header() {
  const { isAuthenticated, username } = useContext(authContext);

  return (
    <header className="site-navbar site-navbar-target" role="banner">
      <div className="container">
        <div className="row align-items-center position-relative">
          <div className="col-3">
            <div className="site-logo">
              <Link to={"/"}>
                <strong className={styles.logo}>CarRento</strong>
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
                  <Link to={"/"} className={styles.navItem}>
                    Home
                  </Link>
                </li>
                {isAuthenticated && (
                  <>
                    <li>
                      <Link to={"/cars"} className={styles.navItem}>
                        Listing
                      </Link>
                    </li>
                    <li>
                      <Link to={"/mine"} className={styles.navItem}>
                        My Cars
                      </Link>
                    </li>
                    <li>
                      <Link to={"/logout"} className={styles.navItem}>
                        Logout
                      </Link>
                    </li>
                    <span style={{ marginLeft: 100}}>Hello, {username}!</span>
                  </>
                )}
                {!isAuthenticated && (
                  <>
                    <li>
                      <Link to={"/register"} className={styles.navItem}>
                        Register
                      </Link>
                    </li>
                    <li>
                      <Link to={"/login"} className={styles.navItem}>
                        Login
                      </Link>
                    </li>
                  </>
                )}
                {/* <li>
                  <Link to={"/about"} className={styles.navItem}>
                    About
                  </Link>
                </li> */}
                {/* <li>
                  <Link to={"contact.html"} className={styles.navItem}>
                    Contact
                  </Link>
                </li> */}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
