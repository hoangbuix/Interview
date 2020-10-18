export default function authHeader() {
    // let token = JSON.parse(sessionStorage.getItem("token"));
    // console.log('token',token.token)

    let token = sessionStorage.getItem("token")
    if (token) {
        // eslint-disable-next-line no-useless-concat
        return {'Authorization': "Bearer"+ " " + token};

    } else if (token && token.accessToken) {
        return {'x-access-token': token.accessToken};
    } else {
        return {};
    }
}
