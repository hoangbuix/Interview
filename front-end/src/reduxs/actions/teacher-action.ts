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