import { useEffect, useState } from "react";
import * as map from "../public/js/map";
import * as rentingService from "../src/services/rentingService";

export default function WhatAreYouWaitingFor() {
  const [cars, setCars] = useState([]);
//   const [coordinates, setCoordinates] = useState([
//     { id: "", latitude: 0, longitude: 0 },
//   ]);


  // Fetching car data from the server
  useEffect(() => {
    rentingService
      .getAllCars()
      .then((result) => setCars(result))
      .catch((err) => console.log(err));
  }, []);


  // Initializing the map
  useEffect(() => {
    map.initializeMap();
  }, []);

// Setting coordinates based on cars data
//   useEffect(() => {
//     const carCoordinates = cars.map((car) => ({
//       id: car.id,
//       latitude: car.location.latitude,
//       longitude: car.location.longitude,
//     }));
    
//     // Set the coordinates state with the extracted data
//     setCoordinates(carCoordinates);
//   }, [cars]);

// Setting markers on the map for each car
  useEffect(() => {
    map.setMarkers(cars);
  }, [cars]);

  return (
    // TODO: take css out of here
    <div
      id="map"
      style={{
        height: 600,
        textAlign: "center",
        alignContent: "middle",
        display: "flex",
        margin: "auto",
        width: "100%",
      }}
    ></div>
  );
}
