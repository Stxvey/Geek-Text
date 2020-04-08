import React, {useState, useEffect} from 'react'
import {Container, Form, Button } from 'react-bootstrap'
import BookCard from './BookCard'

function BookContainer() {

    const [searchTerm, setSearchTerm] = useState("")
    const [bookList, setBookList] = useState([])


    function searchForBooks(e){
        //TODO: check to make sure search isn't empty
        fetch('/books/all/').then(res => {return res.json()}).then(data => getTenBooks(data))
    }
    useEffect(() => {
        searchForBooks() 
     }, [])
    function getTenBooks(data){
        var res = []
        res = data.sort(() => Math.random() - Math.random()).slice(0, 10)
        setBookList(res)
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
            <Form inline>
                <Form.Control type="text" placeholder="Search" onChange={(e) => setSearchTerm(e.target.value)}/>
                <Button variant="outline-success" onClick={(e) => {searchForBooks(e)}}>Search</Button>
            </Form>
            <Container style={gridStyle}>
                {bookList.map((book) => (
                    <BookCard {...book} key={book.id}/>
                ))}
            </Container>
        </>
    )
}

export default BookContainer