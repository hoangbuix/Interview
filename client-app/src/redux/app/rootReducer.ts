import { combineReducers } from '@reduxjs/toolkit'

// Reducers
import counterReducer from "../slices/counterSlice";
import useReducer from "../slices/userSlice";

const rootReducer = combineReducers({
    counter: counterReducer,
    user: useReducer
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer