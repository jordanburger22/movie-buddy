import {useState} from "react"
import movies from "../movies"

export default function RandomMovie() {

    // Challenge:
    // redo what we just did!
    // create movieIndex state and update that index in the getRandomMovie function
    // add the rating and description from the movie in p tags
    // leave out the imageUrl for now

    //js variable
    let index = 0

    // react state
    const [movieIndex, setMovieIndex] = useState(0)

    function getRandomMovie() {
        const randomIndex = Math.floor(Math.random() * movies.length)
        setMovieIndex(randomIndex)
    }

    function nextMovie(num) {

        index += num
        if (index < 0) {
            index = movies.length - 1
        }
        if (index === movies.length) {
            index = 0
        }
        console.log(movies[index])
    }

    return (
        <div>
            <h1>{movies[movieIndex].title}</h1>
            <p>Description: {movies[movieIndex].description}</p>
            <p>Rating : {movies[movieIndex].rating}</p>
            <button onClick={() => nextMovie(-1)}>Prev Movie</button>
            <button onClick={() => nextMovie(1)}>Next Movie</button>
            <button onClick={getRandomMovie}>Random Movie</button>
        </div>
    )
}