import axiosClient from "./auth-header";

export const getTeacherId = (id: string): Promise<ResGetTeacherApi> =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            axiosClient.get(`/teacher/get-teacher/${id}`).then((response) => {
                resolve({
                    data: {
                        teacher: response.data
                    }, message: 'Get success!'
                })
            }).catch(err => {
                reject(new Error('Get failer!'))
            })
        }, 100);
    });

export const getTeacherAll = (): Promise<ResGetTeacherAllApi> =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            axiosClient.get(`/teacher/get-all`).then((response) => {
                let res: any = response;
                resolve({
                    data: {
                        teachers: res
                    }, message: 'Get success!'
                })
                console.log(response)
            }).catch(err => {
                reject(new Error('Get failer!'))
            })
        }, 100);
    });