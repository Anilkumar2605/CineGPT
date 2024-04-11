import { createSlice } from '@reduxjs/toolkit'

const gptSlice = createSlice({
    name: 'gpt',
    initialState: {
        showGptsearch: false,
    },
    reducers: {
        toggleGptSearchView: (state) => {
            state.showGptsearch = !state.showGptsearch
        },
    },
});

export const { toggleGptSearchView } = gptSlice.actions;
export default gptSlice.reducer;
