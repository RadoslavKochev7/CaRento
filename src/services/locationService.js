let cityName, countryName, latitude, longitude;

const Geocoding_URL = `https://api.api-ninjas.com/v1/geocoding?city=${cityName}&country=${countryName}`;
const Reverse_Geocoding_Url = `https://api.api-ninjas.com/v1/reversegeocoding?lat=${latitude}&lon=${longitude}`
const apiKey = { "X-Api-Key": "Ri0O2NTNQth/Ff/zzdDK5A==ilUiwkcmWHuVknrN"};

// Sends a GET request to external API to get the coordinates of a city 
export const getCityCoordinates = async (city, country) => {
    cityName = city;
    countryName = country;
    try {
        const res = await fetch(Geocoding_URL, {headers: apiKey});
        const data = await res.json();

        // return Object.values(data);
        return console.log(Object.values(data));
    } catch (err) {
        return console.log(err);
    }
}

export const getCityName = async (currentLatitude, currentlongitude) => {
    latitude = currentLatitude;
    longitude = currentlongitude;
    try {
        const res = await fetch(Reverse_Geocoding_Url, {headers: apiKey});
        const data = await res.json();

        // return Object.values(data);
        return console.log(Object.values(data));
    } catch (err) {
        return console.log(err);
    }
}