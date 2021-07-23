import * as types from "../constains/user-constain";

export const loginStart = () => ({
    type: types.LOGIN_START
});

export const loginSuccess = (user: ResLoginApi) => ({
    type: types.LOGIN_SUCCESS,
    payload: user
});

export const loginFailer = (messageError: string) => ({
    type: types.LOGIN_FAILER,
    payload: messageError
});

export const getUserIdStart = () => ({
    type: types.GET_USER_ID_START
});

export const getUserIdSuccess = (user: ResGetUserIdApi) => ({
    type: types.GET_USER_ID_SUCCESS,
    payload: user
});

export const getUserIdFailer = (messageError: string) => ({
    type: types.GET_USER_ID_FAILER,
    payload: messageError
});