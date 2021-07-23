import rootReducer from "../reduxs/root-reducer";


declare global {
    type AppState = ReturnType<typeof rootReducer>
}