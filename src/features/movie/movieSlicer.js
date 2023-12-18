import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    movies: []
}

export const movieSlice = createSlice(
    {
        name: "moview",
        initialState,
        reducers: {
            addMovie: (state, action) => {
                const movie = {

                }
            }
        }
    }
)

export const { addMovie } = movieSlice.actions

export default movieSlice.reducer