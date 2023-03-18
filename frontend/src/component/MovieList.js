import Movie from "./Movie"
import Row from 'react-bootstrap/Row';


function MovieList(props){
    console.log(props.data)
    return (
        <>
            
            <Row xs={1} md={2} lg={4} className="g-4">
                {props.data.map((item) => {
                    return <Movie movie={item} />
                    
                 })} 
            </Row>
        </>
    )
}

export default MovieList ;