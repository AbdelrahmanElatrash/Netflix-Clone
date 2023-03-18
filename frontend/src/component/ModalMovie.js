import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form'
import { useState } from 'react';

function ModalMovie(props) {

    let movie=props.movie ;
    const serverURL=process.env.REACT_APP_SERVER_URL
    const MOVIE_URL = serverURL+"/movies" //|| "http://localhost:5000/movies"
    const [commint,setComment]=useState('')
    const reqOption={
        method : 'POST',
        headers : {'Content-Type':'application/json'},
        body:JSON.stringify({
                            title :movie.title ,
                            relaseDate:movie.release_date ,
                            posterPath:movie.posterPath,
                            overVewo:{overview:movie.overview,commint:commint }
        })
    }

    const addToDB=()=>{
        fetch(MOVIE_URL ,reqOption)
            .then(res=>res.json())
            .then((data)=>{
                console.log(data)

            })
            .catch((err)=>{
                console.log(err);
            })
    }
    
    
    const addCommint=(e)=>{
        setComment(e.target.value)
        // reqOption.body.overview.commint=e.target.value
        // console.log(reqOption.body)

    }

    

    return (
        <Modal show={props.showModal} onHide={props.openModal} backdrop="static" keyboard={false}>
            <Modal.Header closeButton>
                <Modal.Title>{movie.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Card.Img variant="top" src={movie.posterPath} />
                {movie.overview}
                <br></br>
                <br></br>
                <Form.Group>
                    <Form.Label>add you'r commint</Form.Label>
                    <Form.Control type='text' value={commint} onChange={addCommint} />
                </Form.Group>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.openModal}>
                    Close
                </Button>
                <Button variant="primary" onClick={addToDB}>add to favorite</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ModalMovie;