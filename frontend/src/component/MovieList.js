import Movie from "./Movie"
function MovieList(props){
    // console.log(props.movies)
    return (
        <>
        {props.movies.map((movie)=>(
             <Movie movie={movie}/>
        ))}
          
        </>
    )
}

export default MovieList ;