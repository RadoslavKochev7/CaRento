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
import * as pathConstants from "../src/constants/pathConstants";

function App() {
  return (
    <>
      <AuthProvider>
        <Header />

        <Routes>
          <Route path={pathConstants.home} element={<Home />} />
          <Route path={pathConstants.cars} element={<CarListing />} />
          <Route path={pathConstants.details} element={<CarDetails />} />
          <Route path={pathConstants.mine} element={<Mine />} />
          <Route path={pathConstants.about} element={<About />} />
          <Route path={pathConstants.login} element={<LoginForm />} />
          <Route path={pathConstants.register} element={<Register />} />
          <Route path={pathConstants.logout} element={<Logout />} />
          <Route path={pathConstants.error} element={<Error />} />
        </Routes>

        <CaRentoToastContainer />
        <Footer />
      </AuthProvider>
    </>
  );
}

export default App;
