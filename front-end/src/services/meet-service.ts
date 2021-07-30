import axiosClient from "./auth-header";

export const getMeetId = (id: string): Promise<ResGetMeetApi> =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            axiosClient.get(`/meet/get-meet/${id}`).then((response) => {
                resolve({
                    data: {
                        meet: response.data
                    }, message: 'Get success!'
                })
            }).catch(err => {
                reject(new Error('Get failer!'))
            })
        }, 100);
    });