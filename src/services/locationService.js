const apiKey = { "X-Api-Key": "Ri0O2NTNQth/Ff/zzdDK5A==ilUiwkcmWHuVknrN" };

// Sends a GET request to external API to get the coordinates of a city 
export const getCityCoordinates = async (cityName, countryName) => {
    try {
        const res = await fetch(`https://api.api-ninjas.com/v1/geocoding?city=${cityName}&country=${countryName}`,
            { headers: apiKey });
        const data = await res.json();

        // return Object.values(data);
        return console.log(Object.values(data));
    } catch (err) {
        return console.log(err);
    }
}

export const getCityName = async (currentLatitude, currentLongitude) => {
    try {
        const res = await fetch(`https://api.api-ninjas.com/v1/reversegeocoding?lat=${currentLatitude}&lon=${currentLongitude}`,
            { headers: apiKey });

        const data = await res.json();

        return Object.values(data);
    } catch (err) {
        return console.log(err);
    }
}