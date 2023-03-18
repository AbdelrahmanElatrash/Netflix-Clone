import { useState, useEffect } from "react";
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
// import Button from 'react-bootstrap/Button';

function FavList() {

    const serverURL = process.env.REACT_APP_SERVER_URL
    const MOVIE_URL = serverURL + "/movies" //|| "http://localhost:5000/movies"

    const [data, setData] = useState([]);

    const fetchData = () => {
        console.log('hello');
        fetch(MOVIE_URL)
            .then((res) => res.json())
            .then((data) => {
                setData(data)
            })
            .catch((err) => {
                console.log(err);
            });



    }

    useEffect(() => {
        fetchData();
    }, [])


    return (
        
        <Row xs={1} md={2} lg={4} className="g-4">
            {data.map((item) => (
                <Col>
                    <Card>
                        <Card.Img variant="top" src={item.posterpath} />
                        <Card.Body>
                            <Card.Title>{item.title}</Card.Title>
                            <Card.Text>
                            <p>release date:{item.release_date} </p>
                           <p>overview : 
                            {item.overview}</p> 
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    )
}

export default FavList;