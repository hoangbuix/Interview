import axiosClient from "./auth-header";

export const getTopicId = (id: string): Promise<ResGetTopicApi> =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            axiosClient.get(`/topic/get-topic/${id}`).then((response) => {
                resolve({
                    data: {
                        topic: response.data
                    }, message: 'Get success!'
                })
            }).catch(err => {
                reject(new Error('Get failer!'))
            })
        }, 100);
    });