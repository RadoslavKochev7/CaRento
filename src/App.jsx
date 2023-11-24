import { Route, Routes } from "react-router-dom";

import Header from "../components/header/Header";
import CarListing from "../components/car/CarListing";
import Footer from "../components/Footer";
import Error from "../components/Error";
import About from "../components/About";
import CarDetails from "../components/car/CarDetails";
import Home from "../components/Home";
import LoginForm from "../components/authentication/login/LoginForm";
import Register from "../components/authentication/register/Register";
import AuthProvider from "./contexts/AuthContext";
import Logout from "../components/authentication/logout/Logout";
import Mine from "../components/car/mine/Mine";

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

        <Footer />
      </AuthProvider>
    </>
  );
}

export default App;
