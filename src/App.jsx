import Header from "../components/Header";
import CarListing from "../components/car/CarListing";
import Footer from "../components/Footer";
import { Route, Routes } from "react-router-dom";
import Error from "../components/Error";
import About from "../components/About";
import LoginForm from "../components/LoginForm";
import CarDetails from "../components/car/CarDetails";

function App() {
  return (
    <>
      <Header />

      <Routes>

        <Route path="/" element={ <CarListing /> } />
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
