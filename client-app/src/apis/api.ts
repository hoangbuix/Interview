import axios from "axios";
import queryString from 'query-string';

const api = axios.create({
    baseURL: "http://localhost:9090",
    headers: {
        'content-type': 'application/json',
    },
    paramsSerializer: params => queryString.stringify(params),
});

api.interceptors.request.use(async (config) => {
    let customHeaders: any;

    const accessToken = sessionStorage.getItem('@token');
    if (accessToken) {
        customHeaders.Authorization = accessToken;
    }

    return {
        ...config,
        headers: {
            ...customHeaders,  // auto attach token
            ...config.headers, // but you can override for some requests
        }
    };
});

export default api;