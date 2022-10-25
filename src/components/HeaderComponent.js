import React from "react";
import {Container, Nav, Navbar, Offcanvas} from "react-bootstrap";
import {MDBBtn, MDBIcon} from "mdb-react-ui-kit";

function Header(){
    return(
        <div className="font-loader row" >
            <Navbar key="md" bg="dark" variant="dark" expand="md" className="mb-3">
                <Container>
                    <Navbar.Brand href="/home">Nicolas: Analist & Dev</Navbar.Brand>
                    <Navbar.Toggle aria-controls="offcanvasNavbar-expand-md"/>
                    <Navbar.Offcanvas
                        id="offcanvasNavbar-expand-md"
                        aria-labelledby="offcanvasNavbarLabel-expand-md"
                        placement="end"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id="offcanvasNavbarLabel-expand-md">
                                Menu
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="me-auto">
                                <Nav.Link to="/home">Inicio</Nav.Link>
                                <Nav.Link to="/aboutus">Sobre Mi</Nav.Link>
                                <Nav.Link to="/contactus">Contacto</Nav.Link>
                            </Nav>
                            <Nav className="justify-content-end">
                                <Nav.Item >
                                    <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#3b5998' }}>
                                        <MDBIcon fab icon='facebook-f' size='lg' />
                                    </MDBBtn>

                                    <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#55acee' }}>
                                        <MDBIcon fab icon='twitter' size='lg' />
                                    </MDBBtn>

                                    <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#dd4b39' }}>
                                        <MDBIcon fab icon='google' size='lg' />
                                    </MDBBtn>

                                    <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#ac2bac' }}>
                                        <MDBIcon fab icon='instagram' size='lg' />
                                    </MDBBtn>
                                </Nav.Item>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </div>

    );
}

export default Header;