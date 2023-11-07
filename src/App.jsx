import Header from "../components/Header";
import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import AvailYourCar from "../components/AvailYourCar";
import CarListing from "../components/CarListing";
import Features from "../components/Features";
import MapContainer from "../components/MapContainer";
import Footer from "../components/Footer";
import { useState } from "react";

function App() {
  

  return (
    <>
      <Header /> 

      <Hero />

      <HowItWorks />

      <AvailYourCar />

      <CarListing />

      {/* <Features /> */}

      {/* <Testimonials /> */}

      <MapContainer />
      
      <Footer />
    </>
  );
}

export default App;
