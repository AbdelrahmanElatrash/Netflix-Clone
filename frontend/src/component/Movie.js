import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function Movie(props) {
    console.log(props.movie)
    return (
        <>

            <Row xs={1} md={2} lg={4}className="g-4">
                {props.movie.map((item) => (
                    <Col>
                        <Card key={item.id}>
                            
                            <Card.Body>
                                <Card.Title>{item.title}</Card.Title>
                                <Card.Img variant="top" src={item.posterPath} />
                                <Card.Text>
                                release date:{item.release_date} <br></br>
                                overview : <br></br>
                                {item.overview}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>

        </>
    )
}
export default Movie;