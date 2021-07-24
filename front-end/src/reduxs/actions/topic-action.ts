import * as types from "../constains/topic-constain";

export const getTopicStart = () => ({
    type: types.GET_TOPIC_START
});

export const getTopicSuccess = (topic: ResGetTopicApi) => ({
    type: types.GET_TOPIC_SUCCESS,
    payload: topic
});

export const getTopicFailer = (messageError: string) => ({
    type: types.GET_TOPIC_FAILER,
    payload: messageError
});