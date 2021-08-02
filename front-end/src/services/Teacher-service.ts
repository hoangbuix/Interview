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
                resolve({
                    data: {
                        teachers: response.data !== undefined ? response.data : response
                    }, message: 'Get success!'
                })
            }).catch(err => {
                reject(new Error('Get failer!'))
            })
        }, 100);
    });
export const editTeacher = (id: string, teacher: any): Promise<ResEditTeacherApi> =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            axiosClient.put(`/teacher/update-teacher/${id}`, teacher).then((response) => {
                resolve({
                    data: {
                        editTeacher: response.data !== undefined ? response.data : response
                    }, message: 'Get success!'
                })
            }).catch(err => {
                reject(new Error('Get failer!'))
            })
        }, 100);
    });
export const deleteTeacher = (id: string): Promise<ResDeleteTeacherApi> =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            axiosClient.delete(`/teacher/delete-teacher/${id}`).then((response) => {
                resolve({
                    data: {
                        deleteTeacher: response.data !== undefined ? response.data : response
                    }, message: 'Get success!'
                })
            }).catch(err => {
                reject(new Error('Get failer!'))
            })
        }, 100);
    });