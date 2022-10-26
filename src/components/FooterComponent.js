import React from "react";
import {MDBBtn, MDBCol, MDBContainer, MDBFooter, MDBIcon, MDBRow} from "mdb-react-ui-kit";
import {Link} from "react-router-dom";

function Footer(){
    return(
        <MDBFooter className=" bg-footer text-white text-md-start text-center">
            <MDBContainer className="p-4 pb-0">
                <section className='text-lg-center justify-content-center border-bottom p-4'>
                    <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
                        <MDBIcon fab icon='github' />
                    </MDBBtn>

                    <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
                        <MDBIcon fab icon='google' />
                    </MDBBtn>

                    <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
                        <MDBIcon fab icon='linkedin-in' />
                    </MDBBtn>
                </section>

                <MDBRow className="mb-4">
                    <MDBCol lg="6" md="12" className="mb-4 mb-md-0">
                        <h5>Nicolas: Analist & Dev</h5>
                        <p>
                            Hola soy Nicolas Alvarez, estudiante en Ciencias de la Computación
                            especializado en Analisis de Datos y Full-Stack development
                        </p>
                    </MDBCol>

                    <MDBCol lg='3' md='6' className="mb-4 mb-md-0">
                        <h5>Menu</h5>
                        <ul className="list-unstyled mb-0">
                            <li>
                                <Link className="text-white" to="/home">Inicio</Link>
                            </li>
                            <li>
                                <Link className="text-white" to="/aboutus">Sobre Mi</Link>
                            </li>
                            <li>
                                <Link className="text-white" to="/contactus">Contacto</Link>
                            </li>
                        </ul>
                    </MDBCol>

                    <MDBCol lg='3' md='6' className="mb-4 mb-md-0">
                        <h5>Portafolio</h5>
                        <ul className="list-unstyled mb-0">
                            <li>
                                <Link className="text-white" to=""></Link>
                            </li>
                            <li>
                                <Link className="text-white" to=""></Link>
                            </li>
                            <li>
                                <Link className="text-white" to=""></Link>
                            </li>
                        </ul>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>

            <div className='text-center p-3 bg-navbar'>
                © 2020 Copyright: Nicolas Alvarez Triana
            </div>
        </MDBFooter>
    );
}

export default Footer;