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


interface EditTeacher {
    teacherName: string;
    role: any;
    active: boolean;
}

interface ResEditTeacherApi extends Res {
    data: {
        editTeacher: EditTeacher
    }
}

interface ResEditTeacher extends ActionRedux {
    payload: ResEditTeacherApi
}

interface ResAddTeacherApi extends Res {
    data: {
        addTeacher: EditTeacher
    }
}

interface ResAddTeacher extends ActionRedux {
    payload: ResAddTeacherApi
}



interface ResDeleteTeacherApi extends Res {
    data: {
        deleteTeacher: Teacher
    }
}

interface ResDeleteTeacher extends ActionRedux {
    payload: ResDeleteTeacherApi
}