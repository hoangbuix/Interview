import axios from "axios";
import axiosClient from "./auth-header";


const url: string | undefined = "http://localhost:9090";

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

        }, 500);
    });


export const getUserId = (id: string): Promise<ResGetUserIdApi> =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            axiosClient.get(`/user/get-user-id/${id}`).then((response) => {
                resolve({
                    data: {
                        user: response.data.data
                    },
                    message: 'success!'
                })
            }).catch(err => {
                reject(new Error('Get failer!'))
            })
        }, 500);
    });