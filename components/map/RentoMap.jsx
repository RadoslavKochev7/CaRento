import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
  Circle,
} from "react-leaflet";
import { useState, useEffect } from "react";
import * as rentingService from "../../src/services/rentingService";
import * as locationService from "../../src/services/locationService.js";
import PopupBody from "./PopupBody";

export default function RentoMap() {
  const latitude = 42.7339; // Default map latitude
  const longitude = 25.4858; // Default map longitude
  const zoomLevel = 7; // Default map zoom level

  const [cars, setCars] = useState([]);

  useEffect(() => {
    rentingService
      .getAllCars()
      .then((result) => setCars(result))
      .catch((err) => console.error(err));
  }, []);

  function LocationMarker() {
    const [position, setPosition] = useState(null);
    const map = useMapEvents({
      click(e) {
        let { lat, lng } = e.latlng;
        locationService.getCityName(lat, lng)
          .then((response) => {
            L.popup()
              .setLatLng(e.latlng)
              .setContent("Hello, from " + response[0].name + "!")
              .openOn(map);
          })
          .catch((err) => console.log(err));
      },
      dblclick() {
        map.locate();
      },
      locationfound(e) {
        map.zoomIn();
        setPosition(e.latlng);
        map.flyTo(e.latlng, map.getZoom());
      },
    });

    return position === null ? null : (
      <Circle
        center={position}
        pathOptions={{ fillColor: "#f03", fillOpacity: 0.5, color: "red" }}
        radius={4000}
      >
        <Popup autoPan={true}>You are here</Popup>
      </Circle>
    );
  }

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Check out our map</h1>
      <MapContainer
        center={[latitude, longitude]}
        zoom={zoomLevel}
        style={{ height: "600px", width: "100%" }}
        scrollWheelZoom={true}
      >
        {[...cars].map((car) => (
          <Marker
            key={car._id}
            position={[car.location.latitude, car.location.longitude]}
          >
            <Popup>
              <PopupBody {...car} />
            </Popup>
          </Marker>
        ))}

        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

        <LocationMarker />
      </MapContainer>
    </div>
  );
}
