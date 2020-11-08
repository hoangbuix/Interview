import api from "./api";

class UserApi {

    async signIn(username: string, password: string) {
        return await api.post('user/login', { username, password });
    }

    async getAllUser() {
        return await api.get('/user/get-all');
    }
};

export default new UserApi();