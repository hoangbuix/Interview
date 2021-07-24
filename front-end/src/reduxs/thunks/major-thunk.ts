import { getMajorId } from "../../services/major-service";
import * as actions from "../actions/major-action";

export const getMajorById = (id: string) => (dispatch?: any) => {
    dispatch(actions.getMajorStart())
    return getMajorId(id).then(res => {
        return dispatch(actions.getMajorSuccess(res))
    }).catch(err => Promise.reject(dispatch(actions.getMajorFailer(err))))
}