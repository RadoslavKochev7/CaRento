const BASE_URL = 'http://localhost:3030/data/reviews/';

export const getAllReviewsForCurrentCar = async (carId) => {
    const query = new URLSearchParams({
        where: `carId="${carId}"`,
        load: `owner=_ownerId:users`,
    });

    const result = await fetch(`${BASE_URL}?${query}`);

    return result.json();
}

export const addReview = async (carId, text) => {
    const token = localStorage.getItem('accessToken');
    const headers = {
        "X-Authorization": token
    };

    const review = await fetch(BASE_URL, {
        method: "POST",
        headers: headers,
        body: JSON.stringify({ carId, text })
    });

    return review.json();
};