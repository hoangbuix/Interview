import * as types from "../constains/topic-constain";

const inintialState = {
    isFetching: false,
    messageError: '',
    isAuthenticated: false,
    topic: null as Topic | null
}

const topicReducer = (state = inintialState, action: { type: any, payload: any }) => {
    switch (action.type) {
        case types.GET_TOPIC_START:
            return { ...state, isFetching: true };
        case types.GET_TOPIC_SUCCESS:
            return { ...state, isFetching: false, topic: action.payload.data.topic, isAuthenticated: true };
        case types.GET_TOPIC_FAILER:
            return { ...state, messageError: action.payload };
        default:
            return state;
    }
};

export default topicReducer