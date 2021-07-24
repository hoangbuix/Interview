import { combineReducers } from "redux";
import companyReducer from "./reducers/company-reducer";
import majorReducer from "./reducers/major-reducer";
import meetReducer from "./reducers/meet-reducer";
import reportReducer from "./reducers/report-reducer";
import taskReducer from "./reducers/task-reducer";
import teacherReducer from "./reducers/teacher-reducer";
import topicReducer from "./reducers/topic-reducer";
import userReducer from "./reducers/user-reducer";

const rootReducer = combineReducers({
    user: userReducer,
    report: reportReducer,
    teacher: teacherReducer,
    meet: meetReducer,
    topic: topicReducer,
    task: taskReducer,
    company: companyReducer,
    major: majorReducer
});

export default rootReducer;