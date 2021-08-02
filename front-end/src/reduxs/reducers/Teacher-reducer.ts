import * as types from "../constains/teacher-action";

const inintialState = {
    teachers: [],
    isFetching: false,
    messageError: '',
    teacher: null as Teacher | null,
    editTeacher: null as Teacher | null,
    deleteTeacher: null as Teacher | null,
}

const teacherReducer = (state = inintialState, action: { type: any, payload: any }) => {
    switch (action.type) {
        case types.GET_TEACHER_START:
            return { ...state, isFetching: true };
        case types.GET_TEACHER_SUCCESS:
            return { ...state, isFetching: false, teacher: action.payload.data.teacher };
        case types.GET_TEACHER_FAILER:
            return { ...state, messageError: action.payload };
        case types.GET_TEACHER_ALL_START:
            return { ...state, isFetching: true };
        case types.GET_TEACHER_ALL_SUCCESS:
            return { ...state, isFetching: false, teachers: action.payload.data.teachers };
        case types.GET_TEACHER_ALL_FAILER:
            return { ...state, messageError: action.payload };
        case types.EDIT_TEACHER_START:
            return { ...state, isFetching: true };
        case types.EDIT_TEACHER_SUCCESS:
            return { ...state, isFetching: false, editTeacher: action.payload.data.editTeacher };
        case types.EDIT_TEACHER_FAILER:
            return { ...state, messageError: action.payload };
        case types.DELETE_TEACHER_START:
            return { ...state, isFetching: true };
        case types.DELETE_TEACHER_SUCCESS:
            return { ...state, isFetching: false, deleteTeacher: action.payload.data.deleteTeacher };
        case types.DELETE_TEACHER_FAILER:
            return { ...state, messageError: action.payload };
        default:
            return state;
    }
};

export default teacherReducer