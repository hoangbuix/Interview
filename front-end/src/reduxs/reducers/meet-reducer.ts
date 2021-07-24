import * as types from "../constains/meet-constain";

const inintialState = {
    isFetching: false,
    messageError: '',
    isAuthenticated: false,
    meet: null as Meet | null
}

const meetReducer = (state = inintialState, action: { type: any, payload: any }) => {
    switch (action.type) {
        case types.GET_MEET_START:
            return { ...state, isFetching: true };
        case types.GET_MEET_SUCCESS:
            return { ...state, isFetching: false, meet: action.payload.data.meet, isAuthenticated: true };
        case types.GET_MEET_FAILER:
            return { ...state, messageError: action.payload };
        default:
            return state;
    }
};

export default meetReducer