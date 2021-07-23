import { combineReducers } from "redux";
import reportReducer from "./reducers/report-reducer";
import teacherReducer from "./reducers/Teacher-reducer";
import userReducer from "./reducers/user-reducer";

const rootReducer = combineReducers({
    user: userReducer,
    report: reportReducer,
    teacher: teacherReducer
});

export default rootReducer;