import React from 'react'
import {Button, Card} from 'react-bootstrap'

function BookCard(props) {
    
    function showProps(){
        console.log(props)
    }
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={props.volumeInfo.imageLinks.thumbnail} />
            <Card.Body>
                <Card.Title>{props.volumeInfo.title}</Card.Title>
                <Card.Text>
                    {props.volumeInfo.description}
                </Card.Text>
                <Button variant="primary" onClick={showProps}>Go somewhere</Button>
            </Card.Body>
        </Card>
    )
}

export default BookCard