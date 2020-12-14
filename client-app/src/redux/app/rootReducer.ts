import { combineReducers } from '@reduxjs/toolkit'

// Reducers
import counterReducer from "../slices/counterSlice";
import teacherReducer from "../slices/teacherSlice";

const rootReducer = combineReducers({
    counter: counterReducer,
    teacher: teacherReducer,
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer