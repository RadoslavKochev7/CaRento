const BASE_URL = 'http://localhost:3030/users/';

export const login = async (email, password, username) => {
    const request = await fetch(BASE_URL + 'login', {
        method: 'POST',
        body: JSON.stringify({ email, password, username })
    });

    const result = request.json();
    return result;
};

export const register = async (email, password, username) => {
    const request = await fetch(BASE_URL + 'register', {
        method: 'POST',
        body: JSON.stringify({ email, password, username })
    });

    const result = request.json();
    return result;
};

export const logout = async () => {

    const response = await fetch(BASE_URL + 'logout', {
        headers: {
            'X-Authorization': window.localStorage.getItem("accessToken")
        }
    });

    if (response.status === 204) {
        return {};
    }
    else {
        throw Error;
    }
};