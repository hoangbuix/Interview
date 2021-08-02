import * as types from "../constains/teacher-action";

export const getTeacherStart = () => ({
    type: types.GET_TEACHER_START
});

export const getTeacherSuccess = (teacher: ResGetTeacherApi) => ({
    type: types.GET_TEACHER_SUCCESS,
    payload: teacher
});

export const getTeacherFailer = (messageError: string) => ({
    type: types.GET_TEACHER_FAILER,
    payload: messageError
});

export const getTeacherAllStart = () => ({
    type: types.GET_TEACHER_ALL_START
});

export const getTeacherAllSuccess = (teachers: ResGetTeacherAllApi) => ({
    type: types.GET_TEACHER_ALL_SUCCESS,
    payload: teachers
});

export const getTeacherAllFailer = (messageError: string) => ({
    type: types.GET_TEACHER_ALL_FAILER,
    payload: messageError
});

export const editTeacherStart = () => ({
    type: types.EDIT_TEACHER_START
});

export const editTeacherSuccess = (teacher: ResEditTeacherApi) => ({
    type: types.EDIT_TEACHER_SUCCESS,
    payload: teacher
});

export const editTeacherFailer = (messageError: string) => ({
    type: types.EDIT_TEACHER_FAILER,
    payload: messageError
});

export const deleteTeacherStart = () => ({
    type: types.DELETE_TEACHER_START
});

export const deleteTeacherSuccess = (user: ResDeleteTeacherApi) => ({
    type: types.DELETE_TEACHER_SUCCESS,
    payload: user
});

export const deleteTeacherFailer = (messageError: string) => ({
    type: types.DELETE_TEACHER_FAILER,
    payload: messageError
});