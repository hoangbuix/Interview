import * as types from "../constains/teacher-action";

const inintialState = {
    teacher: [],
    isFetching: false,
    messageError: '',
    isAuthenticated: false,
}

const teacherReducer = (state = inintialState, action: { type: any, payload: any }) => {
    switch (action.type) {
        case types.GET_TEACHER_START:
            return { ...state, isFetching: true };
        case types.GET_TEACHER_SUCCESS:
            return { ...state, isFetching: false, teacher: action.payload.data.teacher, isAuthenticated: true };
        case types.GET_TEACHER_FAILER:
            return { ...state, messageError: action.payload };
        default:
            return state;
    }
};

export default teacherReducer