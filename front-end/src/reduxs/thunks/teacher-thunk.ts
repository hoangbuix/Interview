import { addTeacher, deleteTeacher, editTeacher, getTeacherAll, getTeacherId } from "../../services/teacher-service";
import * as actions from "../actions/teacher-action";

export const getTeacherById = (id: string) => (dispatch?: any) => {
    dispatch(actions.getTeacherStart())
    return getTeacherId(id).then(res => {
        return dispatch(actions.getTeacherSuccess(res))
    }).catch(err => Promise.reject(dispatch(actions.getTeacherFailer(err))))
};


export const getAllTeacher = () => (dispatch?: any) => {
    dispatch(actions.getTeacherAllStart())
    return getTeacherAll().then(res => {
        return dispatch(actions.getTeacherAllSuccess(res))
    }).catch(err => Promise.reject(dispatch(actions.getTeacherAllFailer(err))))
};

export const teacherAdd = (teacher: EditTeacher) => (dispatch?: any) => {
    dispatch(actions.addTeacherStart())
    return addTeacher(teacher).then(res => {
        return dispatch(actions.addTeacherSuccess(res))
    }).catch(err => Promise.reject(dispatch(actions.addTeacherFailer(err))))
};

export const editTeacherById = (id: any, teacher: EditTeacher) => (dispatch?: any) => {
    dispatch(actions.editTeacherStart())
    return editTeacher(id, teacher).then(res => {
        return dispatch(actions.editTeacherSuccess(res))
    }).catch(err => Promise.reject(dispatch(actions.editTeacherFailer(err))))
};
export const deleteTeacherById = (id: any) => (dispatch?: any) => {
    dispatch(actions.deleteTeacherStart())
    return deleteTeacher(id).then(res => {
        return dispatch(actions.deleteTeacherSuccess(res))
    }).catch(err => Promise.reject(dispatch(actions.deleteTeacherFailer(err))))
};
