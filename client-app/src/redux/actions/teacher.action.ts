import * as types from "../contants/teacher.contant";


export const getAllTeacherRequest = () => ({
    type: types.GET_ALL_TEACHER_REQUEST
});

export const getAllTeacherSuccess = (payload?: any) => ({
    type: types.GET_ALL_TEACHER_SUCCESS,
    payload
})

export const getAllTeacherFailed = (payload?: any) => ({
    type: types.GET_ALL_TEACHER_FAILED,
    payload
})