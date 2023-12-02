const createHeaders = () => {
    const token = localStorage.getItem('accessToken');
    const auth = localStorage.getItem('auth');

    const headers = {
        "X-Authorization": token,
    };

    if (auth && auth.includes('admin@abv.bg')) {
        headers["X-Admin"] = "X-Admin";
    }

    return headers;
};

export default createHeaders;