import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../app/rootReducer';

const initState = {
    loading: true,
    TeacherList: [] as Teacher[],
}

export const teacherSlice = createSlice({
    name: 'teacher',
    initialState: initState,
    reducers: {

    },
});

export const { } = teacherSlice.actions;

// export const incrementAsync = (amount?: any) => (dispatch?: any) => {
//     setTimeout(() => {
//         dispatch(incrementByAmount(amount));
//     }, 1000);
// };

export const selectTeacher = (state: RootState) => state.counter.value;

export default teacherSlice.reducer;