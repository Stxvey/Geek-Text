import React, {useState, useEffect} from 'react'
import {Container, Form, Button } from 'react-bootstrap'
import BookCard from './BookCard'

function BookContainer() {

    const [bookList, setBookList] = useState([])

    useEffect(() => {
        searchForBooks() 
     }, [])
    function searchForBooks(e){
        fetch('/books/all/')
        .then(res => {return res.json()})
        .then(data => setBookList(data))
    }

    const gridStyle = {
        display: 'grid',
        paddingTop: '20px',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gridColumnGap: '10px',
        gridRowGap: '15px'
    }
    return(
        <>
            <Container style={gridStyle}>
                {bookList.map((book) => (
                    <BookCard {...book} key={book.id}/>
                ))}
            </Container>
        </>
    )
}

export default BookContainer