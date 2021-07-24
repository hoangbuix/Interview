import * as types from "../constains/major-constain";

export const getMajorStart = () => ({
    type: types.GET_MAJOR_START
});

export const getMajorSuccess = (major: ResGetMajorApi) => ({
    type: types.GET_MAJOR_SUCCESS,
    payload: major
});

export const getMajorFailer = (messageError: string) => ({
    type: types.GET_MAJOR_FAILER,
    payload: messageError
});