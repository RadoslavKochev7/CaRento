import Header from "../components/header/Header";
import CarListing from "../components/car/CarListing";
import Footer from "../components/Footer";
import { Route, Routes } from "react-router-dom";
import Error from "../components/Error";
import About from "../components/About";
import LoginForm from "../components/LoginForm";
import CarDetails from "../components/car/CarDetails";
import Home from "../components/Home";

function App() {
  return (
    <>
      <Header />

      <Routes>

        <Route path="/" element={ <Home /> } />
        <Route path="/cars" element={ <CarListing /> } />
        <Route path="/cars/details" element={ <CarDetails /> } />
        <Route path="/about" element={ <About /> } />
        <Route path="/login" element={ <LoginForm /> } />
        <Route path="*" element={ <Error /> } />

      </Routes>

      <Footer />
    </>
  );
}

export default App;
