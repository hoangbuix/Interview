import { getMeetId } from "../../services/meet-service";
import * as actions from "../actions/meet-action";

export const getMeet = (id: string) => (dispatch?: any) => {
    dispatch(actions.getMeetStart())
    return getMeetId(id).then(res => {
        return dispatch(actions.getMeetSuccess(res))
    }).catch(err => Promise.reject(dispatch(actions.getMeetFailer(err))))
}