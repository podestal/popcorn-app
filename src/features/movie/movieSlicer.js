import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    movies: []
}

export const movieSlice = createSlice(
    {
        name: "moview",
        initialState,
        reducers: {
            addMovies: (state, action) => {
                // const movie = {
                //     id: action.payload.id,
                //     title: action.payload.title,
                //     year: action.payload.year,
                //     type: action.payload.type,
                //     poster: action.payload.poster
                // }
                state.movies = action.payload
            }
        }
    }
)

export const { addMovies } = movieSlice.actions

export default movieSlice.reducer