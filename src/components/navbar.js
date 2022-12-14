import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavbarITW() {
  return (
    <Navbar fixed="top" bg="dark" variant="dark">
        <Container>
            <Navbar.Brand href="/">Olympic Games <i class="fa-solid fa-trophy"></i></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="/athletes">Athletes</Nav.Link>
                    <Nav.Link href="/games">Games</Nav.Link>
                </Nav>
                <Nav className="ms-auto">
                    <Nav.Link href="" style={{float: "right"}}><i class="fa-solid fa-user"></i></Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  );
}

export default NavbarITW;
