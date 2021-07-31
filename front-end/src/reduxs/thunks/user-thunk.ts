import { loginUser, getUserId, getUserAll } from "../../services/user-sevice";
import * as actions from "../actions/user-action";

export const login = (payload: ReqLogin) => (dispatch?: any) => {
    dispatch(actions.loginStart())
    return loginUser(payload).then(res => {
        localStorage.setItem('token', res.data.access_token)
        return dispatch(actions.loginSuccess(res))
    }).catch(err => Promise.reject(dispatch(actions.loginFailer(err))))
};

export const getUserById = (id: string) => (dispatch?: any) => {
    dispatch(actions.getUserIdStart())
    return getUserId(id).then(res => {
        return dispatch(actions.getUserIdSuccess(res))
    }).catch(err => dispatch(actions.getUserIdFailer(err)))
}

export const getAllUser = () => (dispatch?: any) => {
    dispatch(actions.getUserAllStart())
    return getUserAll().then(res => {
        return dispatch(actions.getUserAllSuccess(res))
    }).catch(err => dispatch(actions.getUserAllFailer(err)))
}