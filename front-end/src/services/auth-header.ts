import axios from "axios";


const api = axios.create({
    baseURL: "http://10.15.0.4:9090"
});


export default function authHeader() {
    const token = window.localStorage.getItem('token');

    if (token) {
        api.defaults.headers.authorization = `Bearer ${token}`
        return { token };
    }
    else {
        return {};
    }
}