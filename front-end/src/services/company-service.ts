import axios from "axios";


const url: string | undefined = "http://10.15.0.4:9090";

export const getCompanyId = (id: string): Promise<ResGetCompanyApi> =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            axios.get(`${url}/company/get-company/${id}`).then((response) => {
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