import * as types from "../constains/user-constain";
export const loginStart = () => ({
    type: types.LOGIN_START
});

export const loginSuccess = (user: any) => ({
    type: types.LOGIN_SUCCESS,
    payload: user
});

export const loginFailer = (messageError: string) => ({
    type: types.LOGIN_FAILER,
    payload: messageError
});