import React, { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import '../components/navbar.css';


const MyNavbar = () => {

    useEffect(() => {
        function updateDateTime() {
            const now = new Date();
            const formattedDateTime = now.toLocaleString('pt-BR', {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit',

            });

            const dateTimeElement = document.getElementById('dateTime');
            if (dateTimeElement) {
                dateTimeElement.textContent = "Adamantina, São Paulo, Brasil - " + formattedDateTime;
            }
        }

        const intervalId = setInterval(updateDateTime, 1000); // Atualiza a cada segundo
        updateDateTime(); // Atualiza imediatamente ao carregar a página

        return () => clearInterval(intervalId); // Limpa o intervalo ao desmontar o componente
    }, []); // O array vazio garante que o efeito seja executado apenas uma vez

    return (
        <Navbar expand="lg" className="bg-body-tertiary" id='navbar'>
            <Container fluid id='container'>
                <Navbar.Brand href="#home" id="dateTime"></Navbar.Brand>

            </Container>
        </Navbar>
    );
};

export default MyNavbar;
