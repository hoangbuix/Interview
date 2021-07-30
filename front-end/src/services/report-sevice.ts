import axiosClient from "./auth-header";

export const getAllReport = (): Promise<ResGetReportApi> =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            axiosClient.get(`/report/get-all`).then((response) => {
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
            axiosClient.get(`/report/get-report-user/${id}`).then((response) => {
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

