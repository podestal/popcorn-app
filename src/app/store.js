import { configureStore } from "@reduxjs/toolkit"
import  movieSlicer from "../features/movie/movieSlicer"

export const store = configureStore(
    {
        reducer: {
            moviesData: movieSlicer
        }
    }
)