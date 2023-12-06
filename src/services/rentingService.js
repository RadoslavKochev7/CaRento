import { carsBaseURL } from "../constants/carConstants";
import { notFound } from "../constants/globalConstants";
import createHeaders from "./headers/authHeaders";

const BASE_URL = carsBaseURL;

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
    const headers = createHeaders();
    const res = await fetch(`${BASE_URL}${carId}`, {
        method: 'DELETE',
        headers: headers
    });
    const data = await res.json();

    return data;
}

// Sends a POST request to the server and returns the added car data
export const addCar = async (data) => {
    const headers = createHeaders();
    const response = await fetch(BASE_URL, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(data)
    });

    if (response.status === 404) {
        throw new Error(notFound);
    }

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
    const headers = createHeaders();
    const res = await fetch(`${BASE_URL}${carId}`, {
        method: 'PUT',
        headers: headers,
        body: JSON.stringify(carData)
    });

    if (res.status === 404) {
        throw new Error(notFound);
    }

    const data = await res.json();
    return data;
}

// Sends a GET request to the server and returns the total count of cars
export const getCount = async () => {
    const res = await fetch(`${BASE_URL}?count`);
    const count = await res.json();

    return count;
}

// Sends a PATCH request to the server and set current userId to car's renterId
export const rentCar = async (carId, carData) => {
    const headers = { "X-Admin": "" };
    const response = await fetch(`${BASE_URL}${carId}`, {
        method: 'PATCH',
        headers: headers,
        body: JSON.stringify(carData)
    });

    if (response.status === 404) {
        throw new Error(notFound);
    }

    return await response.json();
}

// Sends a PATCH request to the server and returns car from renter
export const returnCar = async (carId, data) => {
    
    const headers = { "X-Admin": "" };
    const response = await fetch(`${BASE_URL}${carId}`, {
        method: 'PATCH',
        headers: headers,
        body: JSON.stringify(data)
    });

    if (response.status === 404) {
        throw new Error(notFound);
    }

    return await response.json();
}

// Sends a GET request and returns all cars with renterId = current userId
export const getMyRentings = async (userId) => {
    const query = new URLSearchParams({
        where: `renterId="${userId}"`
    });

    const result = await fetch(`${BASE_URL}?${query}`);

    return result.json();
}