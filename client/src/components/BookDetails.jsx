import React, {useState} from 'react'
import Navbar from './Navbar'
import {useHistory} from 'react-router-dom'
import {Button,  Container} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Image from 'react-bootstrap/Image'
import styled from 'styled-components'
import { Grid, Cell} from 'react-mdl';
import StarRatings from 'react-star-ratings';


const ImgAction = styled(Image)`
    &:hover{
		transform: scale(1.23);
		transition: 0.5s ease;
	}`;

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
                <Button onClick={sendRating}>Rate 5 stars</Button>{'  '}
                <Button onClick={() => addToWishlist(1)}>Add to Wishlist 1</Button>{'  '}
                <Button onClick={() => addToWishlist(2)}>Add to Wishlist 2</Button>{'  '}
                <Button onClick={() => addToWishlist(3)}>Add to Wishlist 3</Button>{'  '}
            </Container>
            
                <h3 style={{
                            marginTop: '0px',
                            marginLeft: '5%',
                            marginBottom: '5px',
                            fontSize: '20px'      
                    }}><strong>Title: </strong>{book.title}.
                </h3>
                
                <ImgAction style={{marginLeft: '20%', height: '400px', width: '310px', padding: '50px'}}src={book.thumbnail} />
                
                <h3 style={{
                            marginTop: '0px',
                            marginLeft: '5%',
                            marginRight: '5%',
                            marginBottom: '5px',
                            fontSize: '15px',
                            textAlign: "justify"
                    }}>
                    <strong>Author: </strong>
                    <Link
                        to={{
                            pathname: '/BookByAuthor',
                            aboutProps: {
                                book: book
                            }  
                        }}
                    style={{ color: '#6fa3f7' }}>
                    {' ' + book.author}
                    </Link>
                    <br/>
                    <strong>Book Description: </strong>{book.longDescription}.<br/>
                    <strong>Genre: </strong>{book.genre}.<br/>
                    <strong>Publisher: </strong>{book.publisher}.<br/>
                    <strong>Release Date: </strong> {book.publishedDate}.<br/>
                    <strong>Price: $</strong> {book.price}<br/>
                    <strong>Book Rating: </strong>
                    <StarRatings
                        rating= {4.5}
                        starRatedColor="goldenrod"
                        starEmptyColor="white"
                        numberOfStars={5}
                        name="rating"
                        starDimension="20px"
                        starSpacing="2px"
					/>
                    <br/>
                    <strong>Book Comments: </strong> Javier Pena: I highly recommend to read the book.
                    <br/>
                </h3>
       </>
    )
}
export default BookDetails