import * as types from "../constaints/app.constaint";
import produce from "immer";

const initialState = {
    isAuthenticated: false,
    closeSideNav: false
}

export const AppReducer = (state = initialState, action:any) => produce(state, draft => {
    switch(action.type){
        case types.LOGOUT:
            localStorage.removeItem("token");
            draft.isAuthenticated = false;
            break;
        case types.LOGIN_SUCCESS:
            draft.isAuthenticated = true;
            break;
        case types.CLOSE_SIDE_NAV:
            draft.closeSideNav = !state.closeSideNav;
            break;
        default:
            return state;
    }
})