import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import ModalMovie from './ModalMovie';
import { useState } from 'react';


function Movie(props) {

    const [showModal,setShowModal]=useState(false)
    
    const openModal=()=>{
        setShowModal(!showModal);

    }

    return (
        <>
            <Col>
                <Card key={props.movie.id}>

                    <Card.Body>
                        <Card.Title>{props.movie.title}</Card.Title>
                        <Card.Img variant="top" src={props.movie.posterPath} />
                        <Card.Text>
                           <p>release date:{props.movie.release_date} </p>
                           <p>overview : 
                            {props.movie.overview}</p> 
                            
                        </Card.Text>
                        <Button variant="primary" onClick={openModal}>add to favorite</Button>
                    </Card.Body>
                </Card>
                <ModalMovie showModal={showModal} openModal={openModal} movie={props.movie}/>
            </Col>

            
            </>
    )
}
export default Movie;