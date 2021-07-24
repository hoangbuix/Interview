interface Topic {
    active: boolean,
    createdAt: string;
    updatedAt: string;
    _id: string;
    teacherId: string;
    teacherName: string
}

interface ResGetTopicApi extends Res {
    data: {
        topic: Topic
    }
}

interface ResGetTopic extends ActionRedux {
    payload: ResGetTopicApi
}