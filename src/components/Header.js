import React from 'react';
import { Navbar, Container } from 'react-bootstrap';

function Header(props) {
    
    return (
        <>
            <Navbar 
                bg="secondary" 
                variant="outline-dark"
                style={{width: "100%", height: "5em", marginBottom: "3em"}}    
            >
                <Container>
                    <div style={{margin: "auto", width: "60%", display: "flex", justifyContent: "center"}}>
                        <input 
                            type="text"
                            placeholder="Search term"
                            style={{ width: "100%", height: "2em" }}
                            ref={props.textInput}
                            onChange={props.changeHandler}
                            value={props.inputTerm}
                            onKeyPress={props.keypress}
                        />
                        <br />
                        <button 
                            onClick={props.clickHandler}
                            
                            style={{
                                width: "10em", 
                                height: "2em", 
                                margin: "auto",
                                backgroundColor: "#D76B4F",
                                color: "white"
                            }}
                        >Submit</button>
                    </div>

                </Container>
            </Navbar> 
        </>

    )
}
export default Header