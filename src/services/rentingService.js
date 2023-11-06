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

        // return Object.values(data);
        return console.log(Object.values(data))
    } catch (err) {
        return console.log(err);
    }
}

// Sends a DELETE request to the server and returs the deleted car
export const deleteCarById = async (carId) => {
    try {
        const res = await fetch(`${BASE_URL}${carId}`, { method: 'DELETE' });
        const data = await res.json();
        console.log(data)
        // return data;
        return console.log(Object.values(data))
    } catch (err) {
        return console.log(err);
    }
}