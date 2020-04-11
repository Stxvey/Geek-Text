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
                <Card.Title><strong>Title: </strong>{props.title}</Card.Title>
                <Card.Text><strong>by: </strong>{props.author}</Card.Text>
                <Card.Text><strong>No. Pages: </strong>{props.pageCount}
                </Card.Text>
                <Card.Text>
                    <strong>Short Description: </strong>{props.shortDescription}
                </Card.Text>
                <Button variant="primary" onClick={showProps}>Go somewhere</Button>
            </Card.Body>
        </Card>
    )
}

export default BookCard