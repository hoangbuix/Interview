interface Teacher {
    active: boolean,
    createdAt: string;
    updatedAt: string;
    _id: string;
    teacherId: string;
    teacherName: string
}

interface ResGetTeacherApi extends Res {
    data: {
        teacher: Teacher
    }
}

interface ResTeacher extends ActionRedux {
    payload: ResGetTeacherApi
}