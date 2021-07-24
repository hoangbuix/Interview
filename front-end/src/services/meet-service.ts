import axios from "axios";


const url: string | undefined = "http://10.15.0.4:9090";

export const getMeetId = (id: string): Promise<ResGetMeetApi> =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            axios.get(`${url}/meet/get-meet/${id}`).then((response) => {
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