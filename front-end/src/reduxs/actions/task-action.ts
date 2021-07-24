import * as types from "../constains/task-constain";

export const getTaskStart = () => ({
    type: types.GET_TASK_START
});

export const getTaskSuccess = (task: ResGetTaskApi) => ({
    type: types.GET_TASK_SUCCESS,
    payload: task
});

export const getTaskFailer = (messageError: string) => ({
    type: types.GET_TASK_FAILER,
    payload: messageError
});