import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import Form from 'react-bootstrap/Form'



function UpdateCommint(props){

    const [commint, setComment] = useState('')
    const addCommint=(e)=>{
        setComment(e.target.value)
    }


    const serverURL = process.env.REACT_APP_SERVER_URL
    const updateCommint = (movie,commint) => {
        const updateURL=`${serverURL}/movies/${movie.id}`
        const reqOption={
            method : 'PUT',
            headers : {'Content-Type':'application/json'},
            body:JSON.stringify({
                id:movie.id,
                title :movie.title ,
                relaseDate:movie.release_date ,
                posterPath:movie.posterpath ,
                overVewo:movie.overview ,
                commint:commint
            })
        }
        fetch(updateURL,reqOption)
            .then(res=>res.json())
            .then(data=>console.log(data))
            
            .catch((err)=>{
                console.log(err);
            })
            props.fetchData();
            props.closeModal();
    }


    return (
        <Modal show={props.showModal} onHide={props.closeModal} backdrop="static">
            <Modal.Header closeButton>
                <Modal.Title>{props.movie.title}</Modal.Title>
            </Modal.Header>
        <Modal.Body>
            <Form.Group>
                <Form.Label>add you'r commint</Form.Label>
                <Form.Control type='text' value={commint} onChange={addCommint} />
            </Form.Group>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={props.closeModal}>
                Close
            </Button>
            <Button variant="success" onClick={()=>updateCommint(props.movie,commint)}>UPDATE</Button>
        </Modal.Footer>
    </Modal>
    )
}

export default UpdateCommint ;