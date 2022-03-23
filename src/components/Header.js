import React from 'react';
import { Navbar, Container } from 'react-bootstrap';

function Header() {
    return (
    <>
        <Navbar bg="primary" variant="outline-dark" fixed="top">
            <Container>
                <Navbar.Brand>Powered by Free News API</Navbar.Brand>
            </Container>

        </Navbar> 
    </>

    )
}
export default Header