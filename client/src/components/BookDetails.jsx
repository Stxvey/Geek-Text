import React, {useState} from 'react'
import Navbar from './Navbar'
import {useHistory} from 'react-router-dom'
import {Button, Container, Image} from 'react-bootstrap'


function BookDetails() {
    const history = useHistory()
    const book = history.location.state.book

    function addToWishlist(whichList){
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({book_id: book.id, wishlistNumber: whichList})
        }
        fetch('/user/wishlist', requestOptions)
        .then(res => console.log(res))
    }

    return(
        <>
 
            <Container>
                <Navbar />
                <Image src={book.thumbnail} />
                <h2>{book.author}</h2>
                <p>{book.longDescription}</p>
                <strong>Price: </strong>${book.price}<br />
                <strong>Genre: </strong>{book.genre}<br/>
                <strong>Publisher: </strong>{book.publisher}<br/>
                <strong>Release Date: </strong>{book.publishedDate}<br/>
                <Button onClick={() => addToWishlist(1)}>Add to Wishlist 1</Button>
                <Button onClick={() => addToWishlist(2)}>Add to Wishlist 2</Button>
                <Button onClick={() => addToWishlist(3)}>Add to Wishlist 3</Button>
            </Container>
        </>
    )
}

export default BookDetails