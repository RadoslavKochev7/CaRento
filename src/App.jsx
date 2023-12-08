import { Route, Routes } from "react-router-dom";

// CSS
import "leaflet/dist/leaflet.css";
import "../public/fonts/icomoon/style.css";
import "../public/css/bootstrap.min.css";
import "../public/css/bootstrap-datepicker.css";
import "../public/css/jquery.fancybox.min.css";
import "../public/css/owl.carousel.min.css";
import "../public/css/owl.theme.default.min.css";
import "../public/fonts/flaticon/font/flaticon.css";
import "../public/css/style.css";

// JS
import "../public/js/jquery-3.3.1.min.js";
import "../public/js/bootstrap.min.js";
import "../public/js/owl.carousel.min.js";
import "../public/js/jquery.sticky.js";
import "../public/js/jquery.waypoints.min.js";
import "../public/js/jquery.animateNumber.min.js";
import "../public/js/jquery.fancybox.min.js";
import "../public/js/jquery.easing.1.3.js";
import "leaflet/dist/leaflet.js";
import "../public/js/main.js";

// JSX
import Header from "../src/components/header/Header";
import Footer from "../src/components/Footer";
import Error from "../src/components/Error";
import About from "../src/components/About";
import Home from "../src/components/Home";
import LoginForm from "../src/components/authentication/login/LoginForm";
import Register from "../src/components/authentication/register/Register";
import AuthProvider from "./contexts/AuthContext";
import Logout from "../src/components/authentication/logout/Logout";
import Mine from "../src/components/car/mine/Mine";
import CaRentoToastContainer from "./components/CaRentoToastContainer";
import CarDetails from "./components/car/details/CarDetails";
import CarListing from "./components/car/listing/CarListing";
import MyRentings from "./components/rent/MyRentings";
import AllReviews from "./components/review/AllReviews";
import AllRentings from "./components/rent/AllRentings";
import AuthGuard from "./components/guards/AuthGuard";
import AdminGuard from "./components/guards/AdminGuard.jsx";

import * as pathConstants from "../src/constants/pathConstants";
import Unauthorized from "./components/Unauthorized.jsx";

function App() {
  return (
    <>
      <AuthProvider>
        <Header />

        <Routes>
          <Route path={pathConstants.home} element={<Home />} />
          <Route path={pathConstants.cars} element={<CarListing />} />
          <Route path={pathConstants.details} element={<CarDetails />} />
          <Route path={pathConstants.about} element={<About />} />
          <Route path={pathConstants.register} element={<Register />} />
          <Route path={pathConstants.error} element={<Error />} />
          <Route path={pathConstants.unauthorized} element={<Unauthorized />} />
          <Route path={pathConstants.login} element={<LoginForm />} />

          <Route element={<AuthGuard />}>
            <Route path={pathConstants.mine} element={<Mine />} />
            <Route path={pathConstants.rentings} element={<MyRentings />} />
            <Route path={pathConstants.logout} element={<Logout />} />

            <Route element={<AdminGuard />}>
              <Route path={pathConstants.reviews} element={<AllReviews />} />
              <Route path={pathConstants.allRentings} element={<AllRentings />} />
            </Route>
          </Route>
        </Routes>

        <CaRentoToastContainer />
        <Footer />
      </AuthProvider>
    </>
  );
}

export default App;
