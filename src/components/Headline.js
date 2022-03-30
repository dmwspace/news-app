import React from 'react';
import { Card } from 'react-bootstrap';

function Headline(props) {

    const punctuationMarks = ['.', '!', '?', ',', ':', ';', '-', '(']
    const updatedText = props.title.split(' ').slice(0, 12).join(' ')

    const headlineText = updatedText.length < 75 ?
        props.title :
        punctuationMarks.includes(updatedText[updatedText.length - 1]) ?
            updatedText.split(' ').slice(0, -1).join(' ') + "..." :
            updatedText
        
    return (
        <Card  bg="secondary" text="light">
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
                    <Card.Title>{headlineText}</Card.Title>
                    <Card.Text>{props.site}</Card.Text>
                </Card.Body>
            </Card.Link>
        </Card>
    )
}
export default Headline