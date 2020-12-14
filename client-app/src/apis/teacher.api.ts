import api from "./api";

export const getAllTeacher = (): Promise<ResGetTeacherApi> => (
    new Promise((resolve, rejects) => {
        setTimeout(() => {
            api.get("teacher/get-all").then((res) => (
                resolve({
                    data: res.data,
                    message: "Lấy toàn bộ thông tin giáo viên thành công"
                })
            )).catch((err) => rejects(new Error(err.message)))
        }, 100)
    })
);

export const getTeacherById = (id: any): Promise<ResGetTeacherApi> => (
    new Promise((resolve, rejects) => {
        setTimeout(() => {
            api.get("", id).then((res) => {
                resolve({
                    data: res.data,
                    message: "Lấy thông tin giáo viên thành công",
                })
            }).catch(err => {
                rejects(new Error(err.message))
            })
        }, 100)
    })
)