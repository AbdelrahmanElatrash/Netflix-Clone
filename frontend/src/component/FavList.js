import { useState, useEffect } from "react";
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import UpdateCommint from "./UpdateCommint";



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
// ....................................................................................
    useEffect(() => {
        fetchData();
    }, [])

// ..............................................................................
    const deleteFromDB = (id) => {
        const deleteURL = `${serverURL}/movies/${id}`
        console.log(deleteURL)
        fetch(deleteURL, { method: 'DELETE' })
            .then((res) => {
                res.json()
                alert('movie wase deleted')
            })
            .catch((err)=>{
                console.log(err);
                alert('somtheng went wrong')
            })
            fetchData() ; 
    }
// .............................................................................


    const [showModal,setShowModal]=useState(false)
    const [movieData, setMovieData] = useState({});
    const openModal=(item)=>{
        setShowModal(true);
        setMovieData(item);
    }
    
    const closeModal = () =>{
        setShowModal(false);
    }
    
// ...............................................................   
    

    return (

        <Row xs={1} md={2} lg={4} className="g-4">

            {data.map((item) => (
                <Col key={item.id}>
                    <Card>

                        <Card.Body>
                            <Card.Title>{item.title}</Card.Title>
                            <Card.Img variant="top" src={item.posterpath} />
                            <Card.Text>
                                release date:{item.release_date} <br/>
                                overview : <br/>
                                    {item.overview}<br/>
                                   commint: {item.commint}
                                
                            </Card.Text>
                            
                            <Button variant="success" onClick={()=>openModal(item)}>update commint</Button>{' '}
                            <Button variant="danger" onClick={() => deleteFromDB(item.id)}>delete</Button>
                        </Card.Body>
                        
                    </Card>
                    <UpdateCommint showModal={showModal} closeModal={closeModal} movie={movieData} fetchData={fetchData}/>
                </Col>
                
            ))}
            
        </Row>
    )
}

export default FavList;