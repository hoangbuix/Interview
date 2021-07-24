import * as types from "../constains/company-constain";

const inintialState = {
    isFetching: false,
    messageError: '',
    isAuthenticated: false,
    company: null as Company | null
}

const companyReducer = (state = inintialState, action: { type: any, payload: any }) => {
    switch (action.type) {
        case types.GET_COMPANY_START:
            return { ...state, isFetching: true };
        case types.GET_COMPANY_SUCCESS:
            return { ...state, isFetching: false, company: action.payload.data.company, isAuthenticated: true };
        case types.GET_COMPANY_FAILER:
            return { ...state, messageError: action.payload };
        default:
            return state;
    }
};

export default companyReducer