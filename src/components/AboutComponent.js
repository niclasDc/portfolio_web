import React from "react";
import {
    MDBCard,
    MDBCardBody, MDBCardImage,
    MDBCardText,
    MDBCardTitle,
    MDBCol,
    MDBRow
} from "mdb-react-ui-kit";

function About() {
    return (
        <div style={{background: "#F8F6F5"}}>
            <div className="jumbotron">
                <div className="row row-content">
                    <div className="col-12 col-md-7 bg-image-about">
                    </div>
                    <div className="col-12 col-md-5" style={{fontSize: "16px"}}>
                        <h1 style={{fontWeight: "bold"}}>Mi historia</h1>
                        <p>
                            Mi nombre es Nicolás Álvarez Triana, estudiante de Ciencias
                            de la Computación en la Universidad Nacional de Colombia.
                            <br/>
                            <br/>
                            Desde 2016, empecé mi desarrollo como programador con un tecnólogo en Sistemas de la
                            Computación,
                            donde adquirí conocimientos para el desarrollo de aplicaciones web,
                            además tuve mi primera experiencia laboral como manejado de bases de datos.
                            <br/>
                            <br/>
                            En 2018, decido seguir mis estudios, para una carrera profesional,
                            donde me presenté a la Universidad Nacional, desde ahí he venido construyendo
                            conocimientos más de la parte teórica pero además en la parte de análisis de datos y
                            herramientas para el desarrollo web.
                            <br/>
                            <br/>
                            Actualmente sigo mis estudios, y con ideas de realizar nuevos proyectos.
                        </p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="row-content-about col-12 d-flex justify-content-center text-white"
                     style={{backgroundColor: "#D47C42"}}>
                    <h2>Mis Habilidades</h2>
                </div>
                <div className="row row-content-groups-cards d-flex justify-content-center col-12">
                    <MDBRow className='row-cols-1 row-cols-md-2 g-4'>
                        <MDBCol>
                            <MDBCard style={{background: "#262924"}} className='text-white h-100'>
                                <MDBRow className="g-0">
                                    <MDBCol md="7">
                                        <MDBCardImage src="/assets/images/web-design.jpg" alt="web-design" fluid/>
                                    </MDBCol>
                                    <MDBCol md="5">
                                        <MDBCardBody>
                                            <MDBCardTitle>Front-End</MDBCardTitle>
                                            <MDBCardText>
                                                React | CSS | TailwindCSS | Boostrap | HTML
                                            </MDBCardText>
                                        </MDBCardBody>
                                    </MDBCol>
                                </MDBRow>
                            </MDBCard>
                        </MDBCol>
                        <MDBCol>
                            <MDBCard style={{background: "#262924"}} className='text-white h-100'>
                                <MDBRow className="g-0">
                                    <MDBCol md="7">
                                        <MDBCardImage src="/assets/images/analisis.jpg" alt="analisis" fluid/>
                                    </MDBCol>
                                    <MDBCol md="5">
                                        <MDBCardBody>
                                            <MDBCardTitle>Analisis</MDBCardTitle>
                                            <MDBCardText>
                                                Python | GGplot2 | Sklearn
                                            </MDBCardText>
                                        </MDBCardBody>
                                    </MDBCol>
                                </MDBRow>
                            </MDBCard>
                        </MDBCol>
                    </MDBRow>
                </div>
            </div>
        </div>
    );
}


export default About;