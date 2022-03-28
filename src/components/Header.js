import React from 'react';
import { Navbar } from 'react-bootstrap';

function Header() {
    return (
    <>
        <Navbar 
            bg="light" 
            variant="outline-dark"
            style={{width: "100%", marginBottom: "3em"}}    
        >
            <Navbar.Brand>Powered by Free News API</Navbar.Brand>
        </Navbar> 
    </>

    )
}
export default Header