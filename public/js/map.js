export const initializeMap = (longitude, latitude) => {
  var map = L.map('map').setView([longitude, latitude], 9);

  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  L.marker([longitude, latitude]).addTo(map)
    .bindPopup(
      `<div>
    <div>
      <div>
        <img src="images/car_6.jpg" alt="Image" class="img-fluid">
      </div>
      <div class="listing-contents h-100">
        <h3>Nissan Moco</h3>
        <div>
          <strong>${400.00}$</strong><span class="mx-1">/</span>day
        </div>
        <div>
          <div>
            <span>City:</span>
            <span>Troyan</span>
        </div>
        <span>Available</span>
        <button class="btn btn-primary" style="background:green">Rent Now </button>

    </div>
  </div>`
    )
    .openPopup();


  L.marker([43.3863705, 24.60351782778453],).addTo(map)
    .bindPopup(
      `<div>
        <div>
          <div>
            <img src="images/car_5.jpg" alt="Image" class="img-fluid">
          </div>
          <div class="listing-contents h-100">
            <h3>Nissan Moco</h3>
            <div>
              <strong>${100.00}$</strong><span class="mx-1">/</span>day
            </div>
            <div>
              <div>
                <span>City:</span>
                <span>Stara Zagora</span>
            </div>
            <span>Available</span>
            <br>
            <div>
            <button id="map-button" class="btn btn-secondary" style="padding:4px; font-size: 14px;">View More</button>
            <button id="map-button" class="btn btn-primary" style="padding:4px; font-size: 14px;">Rent Now</button>
            </div>
        </div>
      </div>`
    )
    .openPopup();


  document.getElementById('map-button').addEventListener('click', () => console.log("clicked"));
}

