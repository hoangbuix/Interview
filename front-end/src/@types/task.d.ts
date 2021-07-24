interface Task {
    active: boolean,
    createdAt: string;
    updatedAt: string;
    _id: string;
    teacherId: string;
    teacherName: string
}

interface ResGetTaskApi extends Res {
    data: {
        task: Task
    }
}

interface ResGetTask extends ActionRedux {
    payload: ResGetTaskApi
}