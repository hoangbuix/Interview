import axiosClient from "./auth-header";

export const getCompanyId = (id: string): Promise<ResGetCompanyApi> =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            axiosClient.get(`/company/get-company/${id}`).then((response) => {
                resolve({
                    data: {
                        company: response.data
                    }, message: 'Get success!'
                })
            }).catch(err => {
                reject(new Error('Get failer!'))
            })
        }, 100);
    });