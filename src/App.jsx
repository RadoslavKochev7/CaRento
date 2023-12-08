import { Route, Routes } from "react-router-dom";

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

import * as pathConstants from "../src/constants/pathConstants";
import AllRentings from "./components/rent/AllRentings";
import AuthGuard from "./components/guards/AuthGuard";

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
          <Route path={pathConstants.login} element={<LoginForm />} />

          <Route element={<AuthGuard />}>
            <Route path={pathConstants.mine} element={<Mine />} />
            <Route path={pathConstants.logout} element={<Logout />} />
            <Route path={pathConstants.rentings} element={<MyRentings />} />
            <Route path={pathConstants.reviews} element={<AllReviews />} />
            <Route path={pathConstants.allRentings} element={<AllRentings />} />
          </Route>
          
        </Routes>

        <CaRentoToastContainer />
        <Footer />
      </AuthProvider>
    </>
  );
}

export default App;
