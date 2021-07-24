import axios from "axios";


const url: string | undefined = "http://10.15.0.4:9090";

export const getMajorId = (id: string): Promise<ResGetMajorApi> =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            axios.get(`${url}/major/get-major/${id}`).then((response) => {
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