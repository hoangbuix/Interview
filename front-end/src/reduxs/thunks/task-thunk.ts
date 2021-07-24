import { getTaskId } from "../../services/task-service";
import * as actions from "../actions/task-action";

export const getTaskById = (id: string) => (dispatch?: any) => {
    dispatch(actions.getTaskStart())
    return getTaskId(id).then(res => {
        return dispatch(actions.getTaskSuccess(res))
    }).catch(err => Promise.reject(dispatch(actions.getTaskFailer(err))))
}