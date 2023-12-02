import { Route, Routes } from "react-router-dom";

import Header from "../src/components/header/Header";
import CarListing from "../src/components/car/CarListing";
import Footer from "../src/components/Footer";
import Error from "../src/components/Error";
import About from "../src/components/About";
import CarDetails from "../src/components/car/CarDetails";
import Home from "../src/components/Home";
import LoginForm from "../src/components/authentication/login/LoginForm";
import Register from "../src/components/authentication/register/Register";
import AuthProvider from "./contexts/AuthContext";
import Logout from "../src/components/authentication/logout/Logout";
import Mine from "../src/components/car/mine/Mine";
import CaRentoToastContainer from "./components/CaRentoToastContainer";

function App() {
  return (
    <>
      <AuthProvider>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cars" element={<CarListing />} />
          <Route path="/cars/details/:id" element={<CarDetails />} />
          <Route path="/mine" element={<Mine />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<Register />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="*" element={<Error />} />
        </Routes>

        <CaRentoToastContainer />
        <Footer />
      </AuthProvider>
    </>
  );
}

export default App;
