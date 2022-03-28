import React from 'react';
import { Card } from 'react-bootstrap';

function Headline(props) {
    return (
        <Card style={{width: '20rem'}} bg="secondary" border="light" text="light">
            <Card.Link 
                href={props.link}
                style={{color: "white", textDecoration: "none", height: "100%", width: "100%"}}
            >
                <Card.Img 
                    variant="top" 
                    src={props.image} 
                    alt="Image not available"
                    style={{height: "49%", width: "100%", paddingTop: "1%"}}    
                />
                <Card.Body style={{height: "50%", width: "100%"}} >
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text>{props.site}</Card.Text>
                </Card.Body>
            </Card.Link>
        </Card>
    )
}
export default Headline