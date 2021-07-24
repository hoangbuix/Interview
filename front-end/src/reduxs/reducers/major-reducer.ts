import * as types from "../constains/major-constain";

const inintialState = {
    isFetching: false,
    messageError: '',
    isAuthenticated: false,
    major: null as Major | null
}

const majorReducer = (state = inintialState, action: { type: any, payload: any }) => {
    switch (action.type) {
        case types.GET_MAJOR_START:
            return { ...state, isFetching: true };
        case types.GET_MAJOR_SUCCESS:
            return { ...state, isFetching: false, major: action.payload.data.major, isAuthenticated: true };
        case types.GET_MAJOR_FAILER:
            return { ...state, messageError: action.payload };
        default:
            return state;
    }
};

export default majorReducer