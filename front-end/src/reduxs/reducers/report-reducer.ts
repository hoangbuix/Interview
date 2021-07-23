import * as types from "../constains/report-constain";

const inintialState = {
    reports: [],
    isFetching: false,
    messageError: '',
    isAuthenticated: false,
    report: null as Report | null
}

const reportReducer = (state = inintialState, action: { type: any, payload: any }) => {
    switch (action.type) {
        case types.GET_REPORT_START:
            return { ...state, isFetching: true };
        case types.GET_REPORT_SUCCESS:
            return { ...state, isFetching: false, reports: action.payload.data.report, isAuthenticated: true };
        case types.GET_REPORT_FAILER:
            return { ...state, messageError: action.payload };
        case types.GET_REPORT_BY_USER_START:
            return { ...state, isFetching: true };
        case types.GET_REPORT_BY_USER_SUCCESS:
            return { ...state, isFetching: false, report: action.payload.data.report, isAuthenticated: true };
        case types.GET_REPORT_BY_USER_FAILER:
            return { ...state, messageError: action.payload };
        default:
            return state;
    }
};

export default reportReducer