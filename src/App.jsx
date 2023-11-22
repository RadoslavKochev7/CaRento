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

function App() {
  return (
    <>
      <Header />

      <Routes>

        <Route path="/" element={ <Home /> } />
        <Route path="/cars" element={ <CarListing /> } />
        <Route path="/cars/details/:id" element={ <CarDetails /> } />
        <Route path="/about" element={ <About /> } />
        <Route path="/login" element={ <LoginForm /> } />
        <Route path="/register" element={ <Register /> } />
        <Route path="*" element={ <Error /> } />

      </Routes>

      <Footer />
    </>
  );
}

export default App;
