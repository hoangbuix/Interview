import api from "./api";
import authHeader from "./auth.api";

class UserApi {

    getAllUser() {
        return api.get('/user/get-all');
    }

    signIn(username: string, password: string) {
        return api.post('/user/login', { username, password });
    }

}


export default new UserApi();


export const loginApi = ({ username, password }: ReqLogin): Promise<ResLoginApi> =>
    new Promise((resolve, reject) => {
        setTimeout(async () => {
            await api.post('/user/login', { username, password }).then(result => {
                resolve({
                    data: {
                        token: result.data.token,
                    },
                    message: "Login thành công",

                })
            }).catch(err => {
                reject(err)
            })
        }, 100)
    })