import axios from "axios";


const url: string | undefined = "http://10.15.0.4:9090";

export const loginUser = ({ username, password }: ReqLogin): Promise<ResLoginApi> =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            axios.post(`${url}/user/login`, { username, password }).then((response) => {
                resolve({
                    data: {
                        access_token: response.data.token
                    }, message: 'Login success!'
                })
            }).catch(err => {
                reject(new Error('Login failer!'))
            })

        }, 100);
    });


export const getUserId = (id: string): Promise<ResGetUserIdApi> =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            axios.get(`${url}/user/get-user-id/${id}`).then((response) => {
                resolve({
                    data: {
                        user: response.data.data
                    },
                    message: 'success!'
                })
            }).catch(err => {
                reject(new Error('Get failer!'))
            })
        }, 100);
    });