import { getTeacherId } from "../../services/Teacher-service";
import * as actions from "../actions/teacher-action";

export const getTeacherById = (id: string) => (dispatch?: any) => {
    dispatch(actions.getTeacherStart())
    return getTeacherId(id).then(res => {
        return dispatch(actions.getTeacherSuccess(res))
    }).catch(err => Promise.reject(dispatch(actions.getTeacherFailer(err))))
};
