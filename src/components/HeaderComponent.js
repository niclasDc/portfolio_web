import React, {useState} from "react";
import {
    MDBCollapse,
    MDBContainer,
    MDBIcon,
    MDBNavbar,
    MDBNavbarBrand, MDBNavbarItem, MDBNavbarLink, MDBNavbarNav,
    MDBNavbarToggler
} from "mdb-react-ui-kit";

function Header() {

    const [showNav, setShowNav] = useState(false);

    return (
        <header>
            <div className="row container d-flex" style={{fontSize: "16px", fontWeight: "bold"}}>
                <MDBNavbar fixed='top' expand='lg' dark className="bg-navbar">
                    <MDBContainer fluid>
                        <MDBNavbarBrand href="/">Nicolas: Analyst & Dev</MDBNavbarBrand>
                        <MDBNavbarToggler
                            type='button'
                            data-target='#navbar'
                            aria-controls='navbar'
                            aria-expanded='false'
                            aria-label='Toggle navigation'
                            onClick={() => setShowNav(!showNav)}
                        >
                            <MDBIcon icon='bars' fas/>
                        </MDBNavbarToggler>
                        <MDBCollapse show={showNav} navbar>
                            <MDBNavbarNav className='mb-2 mb-lg-0 justify-content-end'>
                                <MDBNavbarItem className='active'>
                                    <MDBNavbarLink aria-current='page' href="/">
                                        Inicio
                                    </MDBNavbarLink>
                                </MDBNavbarItem>
                                <MDBNavbarItem>
                                    <MDBNavbarLink href='/portfolio_web/build/aboutus'>Sobre Mí</MDBNavbarLink>
                                </MDBNavbarItem>
                                <MDBNavbarItem>
                                    <MDBNavbarLink href='/portfolio_web/build/portfolio'>Portafolio</MDBNavbarLink>
                                </MDBNavbarItem>
                                <MDBNavbarItem>
                                    <MDBNavbarLink href='/portfolio_web/build/contactus'>Contacto</MDBNavbarLink>
                                </MDBNavbarItem>
                            </MDBNavbarNav>
                        </MDBCollapse>
                    </MDBContainer>
                </MDBNavbar>
            </div>
        </header>

    );
}

export default Header;