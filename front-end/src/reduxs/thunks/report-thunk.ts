import { getAllReport, getReportUserId } from "../../services/report-sevice";
import * as actions from "../actions/report-action";

export const getReportList = () => (dispatch?: any) => {
    dispatch(actions.getReportStart())
    return getAllReport().then(res => {
        return dispatch(actions.getReportSuccess(res))
    }).catch(err => Promise.reject(dispatch(actions.getReportFailer(err))))
};



export const getReportByUserId = (id: string) => (dispatch?: any) => {
    dispatch(actions.getReportByUserStart())
    return getReportUserId(id).then(res => {
        return dispatch(actions.getReportByUserSuccess(res))
    }).catch(err => Promise.reject(dispatch(actions.getReportByUserFailer(err))))
}