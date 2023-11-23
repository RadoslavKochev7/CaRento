const BASE_URL = 'http://localhost:3030/users/';

export const login = async (email, password) => {
    const request = await fetch(BASE_URL + 'login', {
        method: 'POST',
        body: JSON.stringify(email, password)
    });

    const result = request.json();
    return result;
};

export const register = async (email, password) => {
    const request = await fetch(BASE_URL + 'register', {
        method: 'POST',
        body: JSON.stringify(email, password)
    });

    const result = request.json();
    return result;
};

export const logout = async () => {
    const request = await fetch(BASE_URL + 'logout');
}