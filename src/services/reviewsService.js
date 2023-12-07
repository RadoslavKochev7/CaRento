import createHeaders from "./headers/authHeaders";

const BASE_URL = 'http://localhost:3030/data/reviews/';

export const getAllReviewsForCurrentCar = async (carId) => {
    const query = new URLSearchParams({
        where: `carId="${carId}"`,
        load: `owner=_ownerId:users`
    });

    const result = await fetch(`${BASE_URL}?${query}`);

    return result.json();
}

export const addReview = async (carId, text) => {
    const headers = createHeaders();
    const review = await fetch(BASE_URL, {
        method: "POST",
        headers: headers,
        body: JSON.stringify({ carId, text })
    });

    return review.json();
};

export const deleteReview = async (id) => {
    const headers = createHeaders();
    const response = await fetch(`${BASE_URL}${id}`, {
        method: "DELETE",
        headers: headers
    })

    return response.json();
}

export const getAll = async () => {
    const query = new URLSearchParams({
        load: 'owner=_ownerId:users'
    });

    const response = await fetch(`${BASE_URL}?${query}`);
    return await response.json();
}

export const editReview = async (id, text) => {
    const headers = createHeaders();
    const response = await fetch(`${BASE_URL}${id}`, {
        headers: headers,
        method: "PUT",
        body: JSON.stringify({ text: text })
    })

    return response.json();
}