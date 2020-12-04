import * as types from "../contants/user.contant";

export const loginRequest = () => ({
    type: types.LOGIN_REQUESTED
});

export const loginSuccess = (payload?: any) => ({
    type: types.LOGIN_SUCCESS,
    payload
});

export const loginFails = (payload?: any) => ({
    type: types.LOGIN_FAILED,
    payload
})