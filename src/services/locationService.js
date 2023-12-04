const apiKey = { "X-Api-Key": "Ri0O2NTNQth/Ff/zzdDK5A==ilUiwkcmWHuVknrN" };

// Sends a GET request to external API to get the coordinates of a city 
export const getCityCoordinates = async (cityName, countryName) => {
    const response = await fetch(`https://api.api-ninjas.com/v1/geocoding?city=${cityName}&country=${countryName}`,
        { headers: apiKey });

    if (!response.ok) {
        throw new Error('Bad request');
    }

    return await response.json();
}

// Sends a GET request to external API to get the name of a city from coordinates
export const getCityName = async (latitude, longitude) => {
    const response = await fetch(`https://api.api-ninjas.com/v1/reversegeocoding?lat=${latitude}&lon=${longitude}`,
        { headers: apiKey });

    if (!response.ok) {
        throw new Error('Bad request');
    }

    return data = await response.json();
}