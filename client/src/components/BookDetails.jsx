import React, {useEffect, useState} from 'react'
import Navbar from './Navbar'
import {useHistory} from 'react-router-dom'
import {Button,  Container, Form} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Image from 'react-bootstrap/Image'
import styled from 'styled-components'
import StarRatings from 'react-star-ratings';


const ImgAction = styled(Image)`
    &:hover{
		transform: scale(1.23);
		transition: 0.5s ease;
	}`;

function BookDetails() {
    const [hasPurchased, setHasPurchased] = useState()
    const [showRateButton, setShowRateButton] = useState(true)
    const history = useHistory()
    const book = history.location.state.book

    useEffect(() => {
        hasBeenPurchased()
    }, [])
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
    function hasBeenPurchased(){
        fetch(`/user/hasPurchased/${book.id}`)
        .then(res => {return res.json()})
        .then(data => {
            console.log(data)
            if (data.isPurchased == true){
                setHasPurchased(true)
            } else {
                setHasPurchased(false)
            }
        })
    }
    function rateBook(rating){
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({rating, bookId: book.id})
        }
        setShowRateButton(false)
        fetch('/user/rateBook', requestOptions)
        .then(res => {return res.json()})
        .then(data => console.log(data))
        .catch(e => console.log(e))
    }

    function showRating(){
        if(hasPurchased && showRateButton){
            return(
                <div className="container">
                    <h2>Leave Rating</h2>
                    <Container className="d-flex justify-content-center">
                        <Form>
                            <Form.Check inline label="Remain Anonymous" type="radio" />
                            <Form.Check inline label="Use your username" type="radio" />
                            <Form.Check inline label="Use your first name" type="radio" />
                        </Form>
                        <Button onClick={() => rateBook(1)}>1</Button>
                        <Button onClick={() => rateBook(2)}>2</Button>
                        <Button onClick={() => rateBook(3)}>3</Button>
                        <Button onClick={() => rateBook(4)}>4</Button>
                        <Button onClick={() => rateBook(5)}>5</Button>
                    </Container>
                </div>
            )
        } else {
            return
        }
    }

    function showCommentButton(){
        if(hasPurchased){
            return(
                <Button>Leave review</Button> 
            )
        } else {
            return
        }
    }
    
    return(
        <> 
            <Navbar />
            <Container> 
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
                {showRating()}
                {showCommentButton()}
       </>
    )
}
export default BookDetails