import axios from "axios";


const url: string | undefined = "http://10.15.0.4:9090";

export const getTopicId = (id: string): Promise<ResGetTopicApi> =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            axios.get(`${url}/topic/get-topic/${id}`).then((response) => {
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