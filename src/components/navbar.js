import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import '../components/navbar.css';

import gmailLogo from '../assets/logos/gmail.png';
import githubLogo from '../assets/logos/github.png';
import linkedinLogo from '../assets/logos/linkedin.png';
import whatsappLogo from '../assets/logos/whatsapp.png';

const MyNavbar = () => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary" id='navbar'>
            <Container fluid id='container'>
                <Navbar.Brand href="#home">TF</Navbar.Brand>
                <div className="navbar-logos ms-auto">
                    <a href="https://wa.me/5518996826368" target="_blank" rel="noopener noreferrer">
                        <img src={whatsappLogo} alt="WhatsApp" className="navbar-logo" id="logo" width={30} height={30} />
                    </a>
                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=tiagoggferrari@gmail.com&body=Olá, Tiago! Acessei seu portfólio e achei muito legal." target="_blank" rel="noopener noreferrer">
                        <img src={gmailLogo} alt="Gmail" className="navbar-logo" id="logo" width={30} height={30} />
                    </a>
                    <a href="https://www.linkedin.com/in/tiago-garcez-ferrari-783833270/" target="_blank" rel="noopener noreferrer">
                        <img src={linkedinLogo} alt="LinkedIn" className="navbar-logo" id="logo" width={30} height={30} />
                    </a>
                    <a href="https://github.com/tiagogferrari" target="_blank" rel="noopener noreferrer">
                        <img src={githubLogo} alt="GitHub" className="navbar-logo" id="logo" width={30} height={30} />
                    </a>
                </div>
            </Container>
        </Navbar>
    );
};

export default MyNavbar;
