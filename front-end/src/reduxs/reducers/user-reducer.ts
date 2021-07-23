import * as types from "../constains/user-constain";

const inintialState = {
    users: [],
    isFetching: false,
    messageError: '',
    isAuthenticated: false,
    user: null as User | null
}

const userReducer = (state = inintialState, action: { type: any, payload: any }) => {
    switch (action.type) {
        case types.LOGIN_START:
            return { ...state, isFetching: true };
        case types.LOGIN_SUCCESS:
            return { ...state, isFetching: false, users: action.payload, isAuthenticated: true };
        case types.LOGIN_FAILER:
            return { ...state, messageError: action.payload };
        case types.GET_USER_ID_START:
            return { ...state, isFetching: true };
        case types.GET_USER_ID_SUCCESS:
            return { ...state, isFetching: false, user: action.payload.data.user, isAuthenticated: true };
        case types.GET_USER_ID_FAILER:
            return { ...state, messageError: action.payload };
        default:
            return state;
    }
};

export default userReducer