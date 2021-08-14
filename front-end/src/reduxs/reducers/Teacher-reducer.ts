import * as types from "../constains/teacher-action";

const inintialState = {
    teachers: [],
    isFetching: false,
    messageError: '',
    teacher: null as Teacher | null,
    addTeacher: null as EditTeacher | null,
    editTeacher: null as EditTeacher | null,
    deleteTeacher: null as Teacher | null,
}

const teacherReducer = (state = inintialState, action: { type: string, payload: any }) => {
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
        case types.ADD_TEACHER_START:
            return { ...state, isFetching: true };
        case types.ADD_TEACHER_SUCCESS:
            return { ...state, isFetching: false, addTteacher: action.payload.data.addTeacher };
        case types.ADD_TEACHER_FAILER:
            return { ...state, messageError: action.payload };
        case types.EDIT_TEACHER_START:
            return { ...state, isFetching: true };
        case types.EDIT_TEACHER_SUCCESS:
            return { ...state, isFetching: false, editTeacher: action.payload };
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