interface Major {
    active: boolean,
    createdAt: string;
    updatedAt: string;
    _id: string;
    teacherId: string;
    teacherName: string
}

interface ResGetMajorApi extends Res {
    data: {
        major: Major
    }
}

interface ResGetMajor extends ActionRedux {
    payload: ResGetMajorApi
}