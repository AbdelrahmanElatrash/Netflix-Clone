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
        
            <Col key={props.movie.id}>
                <Card key={props.movie.id}>
                    <Card.Body>
                        <Card.Title>{props.movie.title}</Card.Title>
                        <Card.Img variant="top" src={props.movie.posterPath} />
                        <Card.Text>
                            
                                release date: {props.movie.release_date} <br/>
                                overview : <br /> {props.movie.overview} 
                                
                            
                           
                        </Card.Text>
                        <Button variant="primary" onClick={openModal}>add to favorite</Button>
                    </Card.Body>
                </Card>
                <ModalMovie showModal={showModal} openModal={openModal} movie={props.movie}/>
            </Col>

            
            
    )
}
export default Movie;