import { useEffect, useState } from "react";
import * as map from "../public/js/map";
import * as rentingService from "../src/services/rentingService";

export default function WhatAreYouWaitingFor() {
  const [cars, setCars] = useState([]);

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
