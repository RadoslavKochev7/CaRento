const BASE_URL = 'http://localhost:3030/data/cars/';

const token = localStorage.getItem('accessToken');
const auth = localStorage.getItem('auth');
let headers = {
    "X-Authorization": token
};

if (auth.includes('admin@abv.bg')) {
    headers = {
        ...headers,
        "X-Admin": ""
    }
}


console.log(headers);
// Sends a GET request to the server and returns all cars
export const getAllCars = async () => {
    const res = await fetch(BASE_URL);
    const data = await res.json();

    return Object.values(data);
}

// Sends a GET request to the server and returns the car with id: carId
export const getCarById = async (carId) => {
    const res = await fetch(`${BASE_URL}${carId}`);
    const data = await res.json();

    return data
}

// Sends a DELETE request to the server and returns the deleted car 
export const deleteCarById = async (carId) => {
    const res = await fetch(`${BASE_URL}${carId}`, {
        method: 'DELETE',
        headers: headers
    });
    const data = await res.json();

    return data;
}

// Sends a POST request to the server and returns the added car data
export const addCar = async (data) => {
    const response = await fetch(BASE_URL, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(data)
    });

    const result = await response.json();
    return result;

}

export const getMyCars = async (ownerId) => {
    const query = new URLSearchParams({
        where: `_ownerId="${ownerId}"`
    });

    const res = await fetch(`${BASE_URL}?${query}`);
    const data = await res.json();

    return data
}

// Sends a PUT request to the server and returns the edited car
export const editCarById = async (carId, carData) => {
    const res = await fetch(`${BASE_URL}${carId}`, {
        method: 'PUT',
        headers: headers,
        body: JSON.stringify(carData)
    });
    const data = await res.json();
    return data;
}

export const getCount = async () => {
    const res = await fetch(`${BASE_URL}?count`);
    const count = await res.json();

    return count;
}