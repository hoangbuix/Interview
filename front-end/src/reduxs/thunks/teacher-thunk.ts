import { deleteTeacher, editTeacher, getTeacherAll, getTeacherId } from "../../services/teacher-service";
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
export const editteacherById = (id: string, teacher: Teacher) => (dispatch?: any) => {
    dispatch(actions.editTeacherStart())
    return editTeacher(id, teacher).then(res => {
        return dispatch(actions.editTeacherSuccess(res))
    }).catch(err => Promise.reject(dispatch(actions.editTeacherFailer(err))))
};
export const deleteTeacherById = (id: string) => (dispatch?: any) => {
    dispatch(actions.deleteTeacherStart())
    return deleteTeacher(id).then(res => {
        return dispatch(actions.deleteTeacherSuccess(res))
    }).catch(err => Promise.reject(dispatch(actions.deleteTeacherFailer(err))))
};
