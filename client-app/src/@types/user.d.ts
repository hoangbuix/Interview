interface User {
    id: string;
    fullname: string;

}
interface ReqLogin {
    username: string;
    password: string;
}

interface ResLoginApi extends Res {
    data: {
        token: string;
    }
}

interface ResGetUserApi extends Res {
    data: {
        users: User[]
    }
}