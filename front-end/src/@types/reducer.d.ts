import rootReducer from "../reduxs/reducers/root-reducer";


declare global {
    type AppState = ReturnType<typeof rootReducer>
}