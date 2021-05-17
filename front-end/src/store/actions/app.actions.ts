import * as types from "../constaints/app.constaint";

export const logout = () => ({
    type: types.LOGOUT
});

export const toggleSideNav = () => ({
    type: types.CLOSE_SIDE_NAV
});