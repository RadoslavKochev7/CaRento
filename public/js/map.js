// import { getCityName } from 'src/services/locationService.js';

var map;
const latitude = 42.7339;
const longitude = 25.4858;
const zoomLevel = 7;

// Initializing the map container
export const initializeMap = () => {
  map = L.map('map').setView([latitude, longitude], zoomLevel);

  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  L.circle([latitude, longitude], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 3500
  })
    .addTo(map)
    .bindPopup('The geographical center of Bulgaria')

  map.on('click', onMapClick);
}

// TODO: try to import the service somehow
async function testServRes(latitude, longitude) {
  const Reverse_Geocoding_Url = `https://api.api-ninjas.com/v1/reversegeocoding?lat=${latitude}&lon=${longitude}`
  const apiKey = { "X-Api-Key": "Ri0O2NTNQth/Ff/zzdDK5A==ilUiwkcmWHuVknrN" };

  try {
    const res = await fetch(Reverse_Geocoding_Url, { headers: apiKey });
    const data = await res.json();

    return Object.values(data);
  } catch (err) {
    return console.log(err);
  }

}

function onMapClick(e) {
  let { lat, lng } = e.latlng;

  testServRes(lat, lng)
    .then(response => {
      L.popup()
        .setLatLng(e.latlng)
        .setContent("Hello, from " + response.map(r => r.name) + '!')
        .openOn(map);
    })
}




// Adding markers on the map
export const setMarkers = (cars) => {
  [...cars].forEach(car => {
    L.marker([car.location.latitude, car.location.longitude]).addTo(map)
      .bindPopup(
        `<div>
      <div>
        <div>
          <img src=${car.imageUrl} alt="Image" class="img-fluid">
        </div>
        <div class="listing-contents h-100">
          <h3>${car.make} ${car.model}</h3>
          <div>
            <strong>${car.rentalPrice.toFixed(2)}$</strong><span class="mx-1">/</span>day
          </div>
          <div>
            <div>
              <span>City:</span>
              <span>${car.location.city}</span>
          </div>
          <span>${car.isAvailable ? "Available" : "Rented"}</span>
          <br>
          <div>
          <button id="map-button" class="btn btn-secondary" style="padding:4px; font-size: 14px;">View More</button>
          <button id="map-button" class="btn btn-primary" style="padding:4px; font-size: 14px;">Rent Now</button>
          </div>
      </div>
    </div>`
      )
  })

  // document.getElementById('map-button').addEventListener('click', () => console.log("clicked"));

}

{/* <script src='src/services/locationService.js'></script> */}


