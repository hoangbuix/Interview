import api from "./api";
import authHeader from "./auth.api";

const UserApi = {

    getAllUser: async (payload?: any) => {
        const url = '/user/get-all'
        const response = await api.get(url, payload);
        return response.data;
    },
    signIn: async (payload?: any) => {
        const url = '/user/login'
        return await api.post(url, payload);
    }

}


export default UserApi;
