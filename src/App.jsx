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
import * as authService from "./services/authService";
import AuthContext from "./contexts/AuthContext";
import { useState } from "react";

function App() {
  const [auth, setAuth] = useState({});

  const loginHandler =  (values) => {
    // const result = await authService.login(values.email, values.password);
    console.log(values);
  };

  return (
    <>
      <AuthContext.Provider value={{ loginHandler }}>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cars" element={<CarListing />} />
          <Route path="/cars/details/:id" element={<CarDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<Error />} />
        </Routes>

        <Footer />
      </AuthContext.Provider>
    </>
  );
}

export default App;
