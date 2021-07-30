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