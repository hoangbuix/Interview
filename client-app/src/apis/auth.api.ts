import api from "./api";


export default function authHeader() {
    const token = window.sessionStorage.getItem('@token');

    if (token) {
        api.defaults.headers.authorization = `Bearer ${token}`
        return { token };
    }
    else {
        return {};
    }
}