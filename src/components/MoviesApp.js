import React from "react"
import { useDispatch } from "react-redux"
import { addMovies } from "../features/movie/movieSlicer"
import Movies from "./Movies"

const KEY = "3f5dd940"
const query = "interstellar"

const MoviesApp = () => {

    const dispatch = useDispatch()

    React.useEffect(() => {
        fetch(`https://www.omdbapi.com/?apikey=${KEY}&s=${query}`)
        .then( response => response.json())
        .then( data =>  dispatch(addMovies(data.Search)))
    }, [])


    return (
        <div>
            <h1>Movies App</h1>
            <Movies />
        </div>
    )
}

export default MoviesApp