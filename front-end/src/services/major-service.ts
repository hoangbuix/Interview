import axiosClient from "./auth-header";

export const getMajorId = (id: string): Promise<ResGetMajorApi> =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            axiosClient.get(`/major/get-major/${id}`).then((response) => {
                resolve({
                    data: {
                        major: response.data
                    }, message: 'Get success!'
                })
            }).catch(err => {
                reject(new Error('Get failer!'))
            })
        }, 100);
    });