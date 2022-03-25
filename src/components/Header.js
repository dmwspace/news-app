import React from 'react';
import { Navbar } from 'react-bootstrap';

function Header() {
    return (
    <>
        <Navbar bg="primary" variant="outline-dark" fixed="top">
            <Navbar.Brand>Powered by Free News API</Navbar.Brand>
        </Navbar> 
    </>

    )
}
export default Header