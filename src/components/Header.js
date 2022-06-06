import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';


function Header(props) {
    
    return (
        <>  
            <Nav
                className="justify-content-center" 
                style={{ 
                    width: "100%", 
                    height: "1.5em",
                    backgroundColor: "#D76B4F",
                    color: "white" 
                }}
            >
                <Nav.Item>
                    Powered by Newscatcher API
                </Nav.Item>
            </Nav>
            <Nav
                className="justify-content-center" 
                style={{ 
                    width: "100%", 
                    height: "1.5em",
                    backgroundColor: "#D76B4F",
                    color: "white"
                }}
            >
                <Nav.Item>
                    Built by Dean Wright
                </Nav.Item>
            </Nav>

            <Navbar 
                bg="secondary" 
                variant="outline-dark"
                style={{width: "100%", height: "5em", marginBottom: "3em"}}    
            >
                <Container>
                    <div style={{margin: "auto", width: "100vw", display: "flex", justifyContent: "center"}}>
                        <input className="input"
                            type="text"
                            placeholder="Search articles"
                            style={{ width: "75%", height: "2em" }}
                            ref={props.textInput}
                            onChange={props.changeHandler}
                            value={props.inputTerm}
                            onKeyPress={props.keypress}
                        />
                        <br />
                        <button className="button"
                            onClick={props.clickHandler}
                            style={{
                                width: "25%", 
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