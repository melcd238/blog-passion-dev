import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Breakingnews } from '../../coreLogic/domain/entities/Breakingnews';


interface BreakingnewsState {
    breakingnews: Breakingnews;
    loading: boolean;
}

const initialState: BreakingnewsState = {
    breakingnews: {
        title: "",
        content: "",
        author: ""
    },
    loading: false,
};


export const breakingnewsSlice = createSlice({
    name: 'breakingnews',
    initialState,
    reducers: {
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload;
        },
        setBreakingnews: (state, action: PayloadAction<Breakingnews>) => {
            state.breakingnews = action.payload;
        }
    },
});


export const { setLoading, setBreakingnews } = breakingnewsSlice.actions;

export default breakingnewsSlice.reducer;

