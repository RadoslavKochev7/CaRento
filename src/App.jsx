import Header from "../components/Header";
import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import AvailYourCar from "../components/AvailYourCar";
import CarListing from "../components/car/CarListing";
import Features from "../components/Features";
import Footer from "../components/Footer";
import { useState } from "react";
import AllCars from "../components/car/AllCars";

function App() {
  return (
    <>
      <Header />
      
      <AllCars />

      <Footer />
    </>
  );
}

export default App;
