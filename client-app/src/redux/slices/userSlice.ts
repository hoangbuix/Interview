import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import UserApi from "../../apis/user.api";
import { RootState } from "../app/rootReducer";

export const signIn = createAsyncThunk(
    'user/signIn',
    async (params, thunkAPI) => {
        const response = await UserApi.signIn(params);

        sessionStorage.setItem('@token', response.data.token);
    }
)
export const getAll = createAsyncThunk(
    '',
    async (params) => UserApi.getAllUser(params)
)
const userSlice = createSlice({
    name: 'user',
    initialState: {
        current: {},
    },
    reducers: {
        login: (state) => {
            state.current
        }
    }, extraReducers: {
        [getMe.fulfilled]: (state, action) => {
            state.current = action.payload || {};
        },
        [getMe.rejected]: (state, action) => {
            state.current = {};
        },
    }
});

export const { login } = userSlice.actions;

export const incrementAsync = (amount?: any) => (dispatch?: any) => {
    setTimeout(() => {
        dispatch(amount);
    }, 1000);
};

export const userApp = (state: RootState) => state.counter.value;

export default userSlice.reducer;