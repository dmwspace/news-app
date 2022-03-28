import React from 'react';
import { Navbar } from 'react-bootstrap';

function Header() {
    return (
    <>
        <Navbar 
            bg="light" 
            variant="outline-dark"
            style={{width: "100%", height: "5em", marginBottom: "3em"}}    
        >
            <Navbar.Brand>Powered by Free News API</Navbar.Brand>
        </Navbar> 
    </>

    )
}
export default Header