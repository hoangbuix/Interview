interface Company {
    active: boolean,
    createdAt: string;
    updatedAt: string;
    _id: string;
    teacherId: string;
    teacherName: string
}

interface ResGetCompanyApi extends Res {
    data: {
        company: Company
    }
}

interface ResGetCompany extends ActionRedux {
    payload: ResGetCompanyApi
}