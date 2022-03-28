import React from 'react';
import { Card } from 'react-bootstrap';

function Headline(props) {
    return (
        <Card style= {{width: '18rem'}} bg="secondary" border="light" text="light">
            <Card.Img variant="top" src={props.image} />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>{props.site}</Card.Text>
            </Card.Body>
        </Card>
    )
}
export default Headline