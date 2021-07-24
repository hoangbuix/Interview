import * as types from "../constains/company-constain";

export const getCompanyStart = () => ({
    type: types.GET_COMPANY_START
});

export const getCompanySuccess = (company: ResGetCompanyApi) => ({
    type: types.GET_COMPANY_SUCCESS,
    payload: company
});

export const getCompanyFailer = (messageError: string) => ({
    type: types.GET_COMPANY_FAILER,
    payload: messageError
});