import movies from "../movies"

export default function RandomMovie(){

    let index = 0

    function getRandomMovie(){
        index = Math.floor(Math.random() * movies.length)
        console.log(movies[index])
    }

    function nextMovie(num){
        
        index += num
        if(index < 0){
            index = movies.length - 1
        }
        if(index === movies.length){
            index = 0
        }
        console.log(movies[index])
    }

    return(
        <div>
            <h1>{movies[index].title}</h1>
            <button onClick={() => nextMovie(-1)}>Prev Movie</button>
            <button onClick={() => nextMovie(1)}>Next Movie</button>
            <button onClick={getRandomMovie}>Random Movie</button>
        </div>
    )
}