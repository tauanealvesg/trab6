import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import {Link} from 'react-router-dom';



function OffcanvasExample() {
  return (
    <>

      {[false].map((expand) => (
        <Navbar key={expand} bg="light" expand={expand} className="mb-3" fixed="top">
          <Container fluid>
            <Navbar.Brand href="#" as={Link} to="*">
              
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                
                Ipet

                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#action1" as={Link} to="*">Home</Nav.Link>
                  <Nav.Link href="#action2" as={Link} to="sobre">Sobre</Nav.Link>
                  <Nav.Link href="#action7" as={Link} to="contato">Contato</Nav.Link>
                  <NavDropdown
                    title="Usuário"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="#action3" as={Link} to="/Login">LogIn</NavDropdown.Item>
                    <NavDropdown.Item href="#action4" as={Link} to="/cadastro">
                      Cadastro
                    </NavDropdown.Item>

                  </NavDropdown>
                </Nav>

              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default OffcanvasExample;
