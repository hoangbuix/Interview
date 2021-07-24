import * as types from "../constains/meet-constain";

export const getMeetStart = () => ({
    type: types.GET_MEET_START
});

export const getMeetSuccess = (meet: ResGetMeetApi) => ({
    type: types.GET_MEET_SUCCESS,
    payload: meet
});

export const getMeetFailer = (messageError: string) => ({
    type: types.GET_MEET_FAILER,
    payload: messageError
});
