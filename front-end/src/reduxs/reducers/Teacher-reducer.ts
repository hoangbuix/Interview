import * as types from "../constains/teacher-action";

const inintialState = {
    teachers: [],
    isFetching: false,
    messageError: '',
    isAuthenticated: false,
    teacher: null as Teacher | null,
}

const teacherReducer = (state = inintialState, action: { type: any, payload: any }) => {
    switch (action.type) {
        case types.GET_TEACHER_START:
            return { ...state, isFetching: true };
        case types.GET_TEACHER_SUCCESS:
            return { ...state, isFetching: false, teacher: action.payload.data.teacher, isAuthenticated: true };
        case types.GET_TEACHER_FAILER:
            return { ...state, messageError: action.payload };
        case types.GET_TEACHER_ALL_START:
            return { ...state, isFetching: true };
        case types.GET_TEACHER_ALL_SUCCESS:
            return { ...state, isFetching: false, teachers: action.payload.data.teachers, isAuthenticated: true };
        case types.GET_TEACHER_ALL_FAILER:
            return { ...state, messageError: action.payload };
        default:
            return state;
    }
};

export default teacherReducer