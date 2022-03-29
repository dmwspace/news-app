import React from 'react';
import { Navbar, Container } from 'react-bootstrap';

function Header() {
    return (
    <>
        <Navbar 
            bg="secondary" 
            variant="outline-dark"
            style={{width: "100%", height: "5em", marginBottom: "3em"}}    
        >
            <Container position="center">
                <Navbar.Brand 
                    as="input"    
                ></Navbar.Brand>
            </Container>
        </Navbar> 
    </>

    )
}
export default Header