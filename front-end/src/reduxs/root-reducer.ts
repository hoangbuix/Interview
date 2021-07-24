import { combineReducers } from "redux";
import meetReducer from "./reducers/meet-reducer";
import reportReducer from "./reducers/report-reducer";
import teacherReducer from "./reducers/teacher-reducer";
import userReducer from "./reducers/user-reducer";

const rootReducer = combineReducers({
    user: userReducer,
    report: reportReducer,
    teacher: teacherReducer,
    meet: meetReducer
});

export default rootReducer;