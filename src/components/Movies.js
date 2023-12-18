import { useSelector } from "react-redux"
import Movie from "./Movie"

const Movies = () => {

    const movies = useSelector(state => state.moviesData.movies)

    return (
        <div>
            {movies.map(movie => (
                <Movie
                    key={movie.imdbID}
                    movie={movie}
                />
            ))}
        </div>
    )
}

export default Movies