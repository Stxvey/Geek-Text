import React, { useState, useEffect } from 'react'
import { Container, Form, Button, Dropdown, DropdownMenu, DropdownToggle } from 'react-bootstrap'
import BookCard from './BookCard'

function BookContainer() {

    const [searchTerm, setSearchTerm] = useState("")
    const [bookList, setBookList] = useState([])


    function searchForBooks(e) {
        //TODO: check to make sure search isn't empty
        fetch('/books/all/').then(res => { return res.json() }).then(data => getTenBooks(data))
    }
    useEffect(() => {
        searchForBooks()
    }, [])
    /*function browseBooks(j){
        if ()
    }
    function sortBooks(i){
        if (i == 'genre'){

        }
        else if (i == 'title'){

        }
        else if (i == 'author'){
            
        }
        else if (i == 'rating'){
            
        }
        else if (i == 'release'){
            
        }
        else if (i == 'price'){
            
        }
        else if (i == 'top'){
            
        }
    }*/
    function getTenBooks(data) {
        var res = []
        res = data.sort(() => Math.random() - Math.random()).slice(0, 10)
        setBookList(res)
    }
    function getTwentyBooks(data) {
        var res = []
        res = data.sort(() => Math.random() - Math.random()).slice(0, 20)
        setBookList(res)
    }
    const gridStyle = {
        display: 'grid',
        paddingTop: '20px',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gridColumnGap: '10px',
        gridRowGap: '15px'
    }
    return (
        <>
            <Form inline>
                <Form.Control type="text" placeholder="Search" onChange={(e) => setSearchTerm(e.target.value)} />
                <Button variant="outline-success" onClick={(e) => { searchForBooks(e) }}>Search</Button>
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Pick a Genre
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1" /*onClick={sortBooks('genre')}*/ >Genre</Dropdown.Item>
                        <Dropdown.Item href="#/action-2" /*onClick={sortBooks('title')}*/ >Title(A-Z)</Dropdown.Item>
                        <Dropdown.Item href="#/action-3" /*onClick={sortBooks('author')}*/ >Author(A-Z)</Dropdown.Item>
                        <Dropdown.Item href="#/action-4" /*onClick={sortBooks('rating')}*/ >Rating</Dropdown.Item>
                        <Dropdown.Item href="#/action-5" /*onClick={sortBooks('release')}*/ >Release Date</Dropdown.Item>
                        <Dropdown.Item href="#/action-6" /*onClick={sortBooks('price')}*/ >Price</Dropdown.Item>
                        <Dropdown.Item href="#/action-7" /*onClick={sortBooks('top')}*/ >Top Sellers</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Sort By
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-2" /*onClick={sortBooks('title')}*/ >Title(A-Z)</Dropdown.Item>
                        <Dropdown.Item href="#/action-3" /*onClick={sortBooks('author')}*/ >Author(A-Z)</Dropdown.Item>
                        <Dropdown.Item href="#/action-4" /*onClick={sortBooks('rating')}*/ >Rating</Dropdown.Item>
                        <Dropdown.Item href="#/action-5" /*onClick={sortBooks('release')}*/ >Release Date</Dropdown.Item>
                        <Dropdown.Item href="#/action-6" /*onClick={sortBooks('price')}*/ >Price</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Display Count
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1" /*onClick={sortBooks('title')}*/ >10</Dropdown.Item>
                        <Dropdown.Item href="#/action-2" /*onClick={sortBooks('author')}*/ >20</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Form>
            <Container style={gridStyle}>
                {bookList.map((book) => (
                    <BookCard {...book} key={book.id} />
                ))}
            </Container>
        </>
    )
}

export default BookContainer