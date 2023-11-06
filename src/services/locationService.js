let cityName, countryName;

const BASE_URL = `https://api.api-ninjas.com/v1/geocoding?city=${cityName}&country=${countryName}`;

const apiKey = { "X-Api-Key": "Ri0O2NTNQth/Ff/zzdDK5A==ilUiwkcmWHuVknrN"};

// Sends a GET request to external API to get the coordinates of a city 
export const getCityCoordinates = async (city, country) => {
    cityName = city;
    countryName = country;
    try {
        const res = await fetch(BASE_URL, {headers: apiKey});
        const data = await res.json();

        // return Object.values(data);
        return console.log(Object.values(data));
    } catch (err) {
        return console.log(err);
    }
}