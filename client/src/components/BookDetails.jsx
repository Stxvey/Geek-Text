import React, {useState} from 'react'
import Navbar from './Navbar'
import {useHistory} from 'react-router-dom'
import {Button, Container, Image} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import BookByAuthor from './BookByAuthor'

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
                <Button onClick={sendRating}>Rate 5 stars</Button>
                <Button onClick={() => addToWishlist(1)}>Add to Wishlist 1</Button>
                <Button onClick={() => addToWishlist(2)}>Add to Wishlist 2</Button>
                <Button onClick={() => addToWishlist(3)}>Add to Wishlist 3</Button>
            </Container>
            
            <h3 style={{
                        marginTop: '0px',
                        marginLeft: '12%',
                        marginBottom: '5px',
                        fontSize: '20px'
                        
                        // fontVariant: 'all-petite-caps'
				}}><strong>Title: </strong>{book.title}.
            </h3>
            
            <Image style={{marginLeft: '20%', height: '350px', width: '250px'}}src={book.thumbnail} />
            
            <h3 style={{
                        marginTop: '0px',
                        marginLeft: '12%',
                        marginRight: '52%',
                        marginBottom: '5px',
                        fontSize: '15px',
                        textAlign: "justify"
				}}><strong>Author: </strong><Link
                to={{
                    pathname: '/BookByAuthor',
                    aboutProps: {
                        book: book
                    }
                }}
                style={{ color: '#6fa3f7' }}
            >
                {' ' + book.author}
            </Link>.<br/>
                <strong>Description: </strong>{book.longDescription}.<br/>
                <strong>Genre: </strong>{book.genre}.<br/>
                <strong>Publisher: </strong>{book.publisher}.<br/>
                <strong>Release Date: </strong> {book.publishedDate}.<br/>
            </h3>
           
       </>
    )
}

export default BookDetails