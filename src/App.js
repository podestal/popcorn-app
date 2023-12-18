import React from "react";
import MoviesApp from "./components/MoviesApp";

const KEY = "3f5dd940"

function App() {

  const [movies, setMovies] = React.useState([])
  const [watched, setWatched] = React.useState([])
  const [isLoading, setIsLoading] = React.useState(true)
  const query = "interstellar"

  // React.useEffect(() => {
  //   fetch(`https://www.omdbapi.com/?apikey=${KEY}&s=${query}`)
  //   .then(response => response.json())
  //   .then(data => {
  //     console.log(data)
  //     setMovies(data.Search)
  //     setIsLoading(false)
  //   })
  // }, [])

  return (
    // <div>
    //   <h1>Pop Corn App</h1>
    //   {isLoading ? <h3>Loading ...</h3> : <h3>{movies[0].Title}</h3>}
    // </div>
    <MoviesApp />
  );
}

export default App;
