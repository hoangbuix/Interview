import useFetch from "../hooks/useFetch";

export const getAllReport = (): Promise<ResGetAllReportApi> =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            const { data, error } = useFetch<Report[]>('http://localhost:9090' + `/report/get-report`);
            if (data) {
                resolve({
                    data: {
                        reports: data
                    }, message: 'Get success!'
                })
            } else {
                reject(error)
            }
        }, 100);
    });
export const getReportUserId = (id: string): Promise<ResGetReportByIdApi> =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            const { data, error } = useFetch<Report>('http://localhost:9090' + `/report/get-report-user/${id}`);
            if (data) {
                resolve({
                    data: {
                        report: data
                    }, message: 'Get success!'
                })
            } else {
                reject(error)
            }
        }, 100);
    });

