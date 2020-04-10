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

    function sendToCart(id) {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({book_id: id})
        }
        fetch('/user/addBook', requestOptions)
        .then(res => {return res.json()})
        .then(data => console.log(data))
    }
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={props.thumbnail} />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                    {props.pageCount}
                </Card.Text>
                <Card.Text>
                    {props.shortDescription}
                </Card.Text>
                <i class="fas fa-cart-plus" onClick={() => sendToCart(props.id)}></i>
                <Button variant="primary" onClick={showBookDetails}>More details</Button>
            </Card.Body>
        </Card>
    )
}

export default BookCard