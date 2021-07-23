interface ReqLogin {
    username: string;
    password: string;
}

interface ResLoginApi extends Res {
    data: {
        access_token: string
    }
}

interface ResLogin extends ActionRedux { }

interface User {
    _id: string
    userId: string
    avatar: string
    fullName: string
    gender: string
    birthday: string
    address: string
    inClass: string
    phone: string
    email: string
    username: string
    password: string
    changePasswordAt: Date
    active: boolean
    roles: Array
    companyId: string
    topicId: string
    majorId: string
    teacherId: string
    createdAt: Date
    updatedAt: Date
}

interface ResGetUserIdApi extends Res {
    data: {
        user: User
    }
}
interface ResGetUserId extends ActionRedux {
    payload: ResGetUserIdApi
}