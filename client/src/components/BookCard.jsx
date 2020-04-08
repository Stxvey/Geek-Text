import React from 'react'
import {useHistory} from 'react-router-dom'
import {Button, Card} from 'react-bootstrap'

function BookCard(props) {
    
    const history = useHistory()

    function showBookDetails(){
        history.push({
            pathname: '/bookdetails',
            state: {book: props}
        })
    }

    function sendToCart() {
        history.push({
            pathname: '/cart',
            state: {cart: props.title}
        })
    }
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={props.thumbnailUrl} />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                    {props.pageCount}
                </Card.Text>
                <i class="fas fa-cart-plus" onClick={sendToCart}></i>
                <Button variant="primary" onClick={showBookDetails}>More details</Button>
            </Card.Body>
        </Card>
    )
}

export default BookCard