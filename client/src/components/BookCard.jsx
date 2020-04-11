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

    function addToCart(id){
        console.log('value of id ', id)
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({book_id: id})
        }
        fetch('/cart/additem', requestOptions)
        .then(res => console.log(res))
    }
    
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={props.thumbnailUrl} />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                    {props.pageCount}
                </Card.Text>
<<<<<<< Updated upstream
                <i class="fas fa-cart-plus" onClick={sendToCart}></i>
=======
                <Card.Text>
                    {props.shortDescription}
                </Card.Text>
                <i class="fas fa-cart-plus" onClick={() => addToCart(props.id)}></i>
>>>>>>> Stashed changes
                <Button variant="primary" onClick={showBookDetails}>More details</Button>
            </Card.Body>
        </Card>
    )
}

export default BookCard