import { getCompanyId } from "../../services/company-service";
import * as actions from "../actions/company-action";

export const getCompanyById = (id: string) => (dispatch?: any) => {
    dispatch(actions.getCompanyStart())
    return getCompanyId(id).then(res => {
        return dispatch(actions.getCompanySuccess(res))
    }).catch(err => Promise.reject(dispatch(actions.getCompanyFailer(err))))
}