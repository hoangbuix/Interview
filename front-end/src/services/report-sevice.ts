import axios from "axios";


const url: string | undefined = "http://10.15.0.4:9090";

export const getAllReport = (): Promise<ResGetReportApi> =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            axios.get(`${url}/report/get-all`).then((response) => {
                resolve({
                    data: {
                        report: response.data
                    }, message: 'Get success!'
                })
            }).catch(err => {
                reject(new Error('Get failer!'))
            })
        }, 100);
    });
export const getReportUserId = (id: string): Promise<ResGetReportApi> =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            axios.get(`${url}/report/get-report-user/${id}`).then((response) => {
                resolve({
                    data: {
                        report: response.data
                    }, message: 'Get success!'
                })
            }).catch(err => {
                reject(new Error('Get failer!'))
            })
        }, 100);
    });

