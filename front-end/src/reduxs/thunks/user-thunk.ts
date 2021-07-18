import { loginUser } from "../../services/user-sevice";
import * as actions from "../actions/user-action";

export const login = (payload: ReqLogin) => (dispatch?: any) => {
    dispatch(actions.loginStart())
    return loginUser(payload).then(res => {
        localStorage.setItem('token', res.data.access_token)
        return dispatch(actions.loginSuccess(res))
    }).catch(err => Promise.reject(dispatch(actions.loginFailer(err))))
}