import axios from "axios";


const url: string | undefined = "http://10.15.0.4:9090";

export const getTaskId = (id: string): Promise<ResGetTaskApi> =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            axios.get(`${url}/task/get-task/${id}`).then((response) => {
                resolve({
                    data: {
                        task: response.data
                    }, message: 'Get success!'
                })
            }).catch(err => {
                reject(new Error('Get failer!'))
            })
        }, 100);
    });