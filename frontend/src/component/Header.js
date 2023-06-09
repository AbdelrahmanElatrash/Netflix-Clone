import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import { Link } from 'react-router-dom';


function Header() {
  return (

      <Navbar bg="primary" variant="dark">
      <Container>
        <Nav className="me-auto">
          <Nav.Link href='/'>Home</Nav.Link>
          <Nav.Link href="/Faverit">Faverit list</Nav.Link> 
        </Nav>
      </Container>
    </Navbar>

    
  )
}

export default Header;