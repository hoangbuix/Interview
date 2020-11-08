import api from "./api";
import authHeader from "./auth.api";

class TeacherApi {
    async getAllTeacher() {
        return await api.get('/teacher/get-all');
    }

    async getTeacherById(id: string) {
        return await api.get(`/teacher/get-teacher/${id}`);
    }

    async updateTeacher(id: string, teacherName: string, active: boolean) {
        return await api.put(`/teacher/update-teacher/${id}`, { teacherName, active }, { headers: authHeader() });
    }

    async deleteTeacher(id: string) {
        return await api.delete(`/teacher/delete-teacher/${id}`, { headers: authHeader() })
    }
};
export default new TeacherApi();