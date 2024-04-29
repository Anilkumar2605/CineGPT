import { createSlice } from '@reduxjs/toolkit'

const gptSlice = createSlice({
    name: 'gpt',
    initialState: {
        showGptsearch: false,
        gptMovies: null,
        movieNames: null,
        movieResults: null,

    },
    reducers: {
        toggleGptSearchView: (state) => {
            state.showGptsearch = !state.showGptsearch
        },
        addGptMovieResult: (state, action) => {
            const { movieNames, movieResults } = action.payload;
            state.gptMovies = action.payload;
            state.movieNames = movieNames;
            state.movieResults = movieResults;
        },

    },
});

export const { toggleGptSearchView, addGptMovieResult, } = gptSlice.actions;
export default gptSlice.reducer;
