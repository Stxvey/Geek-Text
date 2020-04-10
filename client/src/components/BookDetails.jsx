import React, {useState} from 'react'
import Navbar from './Navbar'
import {useHistory} from 'react-router-dom'
import {Button, Container, Image} from 'react-bootstrap'


function BookDetails() {
    const history = useHistory()
    const book = history.location.state.book

    function sendRating(e){
        e.preventDefault()
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({book_id: book.id, rating: 5})
        }
        fetch('/book/rating', requestOptions)
        .then(res => {
            console.log(res)
        })
    }
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
            <Navbar />
            <Container>
                <Image src={book.thumbnail} />
                <h2>{book.author}</h2>
                <Button onClick={sendRating}>Rate 5 stars</Button>
                <Button onClick={() => addToWishlist(1)}>Add to Wishlist 1</Button>
                <Button onClick={() => addToWishlist(2)}>Add to Wishlist 2</Button>
                <Button onClick={() => addToWishlist(3)}>Add to Wishlist 3</Button>
            </Container>
        </>
    )
}

export default BookDetails