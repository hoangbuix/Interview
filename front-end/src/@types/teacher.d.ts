interface Teacher {
    active: boolean,
    createdAt: string;
    updatedAt: string;
    _id: string;
    role: any;
    teacherName: string
}

interface ResGetTeacherApi extends Res {
    data: {
        teacher: Teacher
    }
}

interface ResGetTeacher extends ActionRedux {
    payload: ResGetTeacherApi
}



interface ResGetTeacherAllApi extends Res {
    data: {
        teachers: Teacher[]
    }
}

interface ResGetTeacherAll extends ActionRedux {
    payload: ResGetTeacherAllApi
}