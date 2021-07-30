import axiosClient from "./auth-header";

export const getTaskId = (id: string): Promise<ResGetTaskApi> =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            axiosClient.get(`/task/get-task/${id}`).then((response) => {
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