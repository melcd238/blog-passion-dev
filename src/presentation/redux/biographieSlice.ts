import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Biographie } from '../../coreLogic/domain/entities/Biographie';

interface BiographieState {
    biographie: Biographie;
    loading: boolean;
}


const initialState: BiographieState = {
    biographie: {
        name: "",
        function: "",
        description: "",
        picture: "",
        body: "",
        lkdn: "",
        github: ""
    },
    loading: false,
};

export const biographieSlice = createSlice({
    name: 'biographie',
    initialState,
    reducers: {
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload;
        },
        setBiographie: (state, action: PayloadAction<Biographie>) => {
            state.biographie = action.payload;
        }
    },
});

export const { setLoading, setBiographie } = biographieSlice.actions;

export default biographieSlice.reducer;