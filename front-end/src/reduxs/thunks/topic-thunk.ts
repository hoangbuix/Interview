import { getTopicId } from "../../services/topic-service";
import * as actions from "../actions/topic-action";

export const getTopcById = (id: string) => (dispatch?: any) => {
    dispatch(actions.getTopicStart())
    return getTopicId(id).then(res => {
        return dispatch(actions.getTopicSuccess(res))
    }).catch(err => Promise.reject(dispatch(actions.getTopicFailer(err))))
}