import * as types from "../constains/task-constain";

const inintialState = {
    isFetching: false,
    messageError: '',
    isAuthenticated: false,
    task: null as Task | null
}

const taskReducer = (state = inintialState, action: { type: any, payload: any }) => {
    switch (action.type) {
        case types.GET_TASK_START:
            return { ...state, isFetching: true };
        case types.GET_TASK_SUCCESS:
            return { ...state, isFetching: false, task: action.payload.data.task, isAuthenticated: true };
        case types.GET_TASK_FAILER:
            return { ...state, messageError: action.payload };
        default:
            return state;
    }
};

export default taskReducer