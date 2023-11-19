import { getCityCoordinates } from './locationService.js';

const BASE_URL = 'http://localhost:3030/jsonstore/cars/';


// Sends a GET request to the server and returns all cars
export const getAllCars = async () => {
    try {
        const res = await fetch(BASE_URL);
        const data = await res.json();

        return Object.values(data);
    } catch (err) {
        return console.log(err);
    }
}

// Sends a GET request to the server and returns the car with id: carId
export const getCarById = async (carId) => {
    try {
        const res = await fetch(`${BASE_URL}${carId}`);
        const data = await res.json();

        return data
    } catch (err) {
        return console.log(err);
    }
}

// Sends a DELETE request to the server and returs the deleted car 
export const deleteCarById = async (carId) => {
    try {
        const res = await fetch(`${BASE_URL}${carId}`, { method: 'DELETE' });
        const data = await res.json();

        return data;
    } catch (err) {
        return console.log(err);
    }
}

// Sends a POST request to the server and returns the added car data
export const addCar = async (data) => {
    const coordinates = await getCityCoordinates(data.city, data.country);

    try {
        const carBody = {
            rentalPrice: data.price.toFixed(2),
            make: data.make,
            model: data.model,
            year: new Date(data.year).getFullYear(),
            imageUrl: data.imageUrl,
            fuelType: data.selected,
            horsePower: data.horsePower,
            mileage: data.mileage,
            isAvailable: true,
            description: data.description,
            location: {
                country: data.country,
                city: data.city,
                address: data.address,
                latitude: coordinates[0].latitude,
                longitude: coordinates[0].longitude
            }
        };
        const response = await fetch(BASE_URL, {
            method: 'POST',
            body: JSON.stringify(carBody)
        });

        const result = await response.json();
        return result;
    } catch (err) {
        return console.log(err);
    }
}