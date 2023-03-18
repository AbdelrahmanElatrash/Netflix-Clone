import { useState, useEffect } from "react";
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form'


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
            })
    }
// .............................................................................

    const [commint, setComment] = useState('')
    const [changeCommit,setChangeCommit]=useState(false)
    const addCommint=(e)=>{
        setChangeCommit(!changeCommit)
        setComment(e.target.value)
    }
    // const updateCommint = (id,item) => {
        // const updateURL=`${serverURL}/movies/${id}`
        // const reqOption={
        //     method : 'PUT',
        //     headers : {'Content-Type':'application/json'},
        //     body:JSON.stringify({
        //                         overVewo:{overview:item.overview,commint:commint }
        //     })
        // }
        // fetch(updateURL,reqOption)
        //     .then(res=>res.json())
        //     .then(data=>console.log(data))
        //     .catch((err)=>{
        //         console.log(err);
        //     })
    // }
                 
// ...............................................................   
    

    return (

        <Row xs={1} md={2} lg={4} className="g-4">
            {data.map((item) => (
                <Col key={item.id}>
                    <Card key={item.id}>

                        <Card.Body>
                            <Card.Title>{item.title}</Card.Title>
                            <Card.Img variant="top" src={item.posterpath} />
                            <Card.Text>
                                release date:{item.release_date} <br/>
                                overview : <br/>
                                    {item.overview}<br/>
                                    {commint}
                                
                                 {/* <Form.Group>
                                        {changeCommit
                                            ?<> <Form.Label>add you'r commint</Form.Label>  <Form.Control type='text' value={commint} onChange={addCommint} /> </>
                                            : {commint}
                                        }
                                    </Form.Group> */}
                               
                                   
                                    
                             
                                
                            </Card.Text>
                            <Button variant="success" onClick={addCommint}>update commint</Button>{' '}
                            <Button variant="danger" onClick={() => deleteFromDB(item.id)}>delete</Button>
                        </Card.Body>

                    </Card>

                </Col>
            ))}
        </Row>
    )
}

export default FavList;