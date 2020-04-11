import React, { useState, useEffect } from 'react'
import { Container, Form, Button, Dropdown, DropdownMenu, DropdownToggle } from 'react-bootstrap'
import BookCard from './BookCard'

function BookContainer() {

    const [bookList, setBookList] = useState([])
    var bookLimit = 20

    function setLimit(i){
        bookLimit = i
    }
    function browseTop(){
        fetch('/book/getTop')
        .then(res => {return res.json()})
        .then(data => setBookList(data))
        .catch(e => {
            console.log('failed')
        })
    }
    function displayGenre(i) {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({genre: i})
        }
        fetch('/book/getGenre', requestOptions)
        .then(res => {return res.json()})
        .then(data => setBookList(data))
        .catch(e => {
            console.log('failed')
        })
    }
    function browseRating(i){
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({rate: i})
        }
        fetch('/book/getRating', requestOptions)
        .then(res => {return res.json()})
        .then(data => setBookList(data))
        .catch(e => {
            console.log('failed')
        })
    }
    function sortBooks(i,j){
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({attribute: i, order: j})
        }
        fetch('/book/getSort', requestOptions)
        .then(res => {return res.json()})
        .then(data => setBookList(data))
        .catch(e => {
            console.log('failed')
        })
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
                <Button variant="success" onClick={() => browseTop()}>Browse by Top Sellers</Button>
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Pick a Genre
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1" onSelect={() => displayGenre('Open Source')} >Open Source</Dropdown.Item>
                        <Dropdown.Item href="#/action-2" onSelect={() => displayGenre('Java')} >Java</Dropdown.Item>
                        <Dropdown.Item href="#/action-3" onSelect={() => displayGenre('Software Engineering')} >Software Engineering</Dropdown.Item>
                        <Dropdown.Item href="#/action-4" onSelect={() => displayGenre('Internet')} >Internet</Dropdown.Item>
                        <Dropdown.Item href="#/action-5" onSelect={() => displayGenre('Web Development')} >Web Development</Dropdown.Item>
                        <Dropdown.Item href="#/action-6" onSelect={() => displayGenre('Miscellaneous')} >Miscellaneous</Dropdown.Item>
                        <Dropdown.Item href="#/action-7" onSelect={() => displayGenre('Microsoft .NET')} >Microsoft .NET</Dropdown.Item>
                        <Dropdown.Item href="#/action-8" onSelect={() => displayGenre('Microsoft')} >Microsoft</Dropdown.Item>
                        <Dropdown.Item href="#/action-9" onSelect={() => displayGenre('Next Generation Databases')} >Next Generation Databases</Dropdown.Item>
                        <Dropdown.Item href="#/action-10" onSelect={() => displayGenre('PowerBuilder')} >PowerBuilder</Dropdown.Item>
                        <Dropdown.Item href="#/action-11" onSelect={() => displayGenre('Object-Oriented Programming')} >Object-Oriented Programming</Dropdown.Item>
                        <Dropdown.Item href="#/action-12" onSelect={() => displayGenre('Networking')} >Networking</Dropdown.Item>
                        <Dropdown.Item href="#/action-13" onSelect={() => displayGenre('Programming')} >Programming</Dropdown.Item>
                        <Dropdown.Item href="#/action-14" onSelect={() => displayGenre('Python')} >Python</Dropdown.Item>
                        <Dropdown.Item href="#/action-15" onSelect={() => displayGenre('Computer Graphics')} >Computer Graphics</Dropdown.Item>
                        <Dropdown.Item href="#/action-16" onSelect={() => displayGenre('Mobile Technology')} >Mobile Technology</Dropdown.Item>
                        <Dropdown.Item href="#/action-17" onSelect={() => displayGenre('Business')} >Business</Dropdown.Item>
                        <Dropdown.Item href="#/action-18" onSelect={() => displayGenre('XML')} >XML</Dropdown.Item>
                        <Dropdown.Item href="#/action-19" onSelect={() => displayGenre('Perl')} >Perl</Dropdown.Item>
                        <Dropdown.Item href="#/action-20" onSelect={() => displayGenre('Client-Server')} >Client-Server</Dropdown.Item>
                        <Dropdown.Item href="#/action-21" onSelect={() => displayGenre('Microsoft/.NET')} >Microsoft/.NET</Dropdown.Item>
                        <Dropdown.Item href="#/action-22" onSelect={() => displayGenre('Object-Technology Programming')} >Object-Technology Programming</Dropdown.Item>
                        <Dropdown.Item href="#/action-23" onSelect={() => displayGenre('Algorithmic Art')} >Algorithmic Art</Dropdown.Item>
                        <Dropdown.Item href="#/action-24" onSelect={() => displayGenre('Theory')} >Theory</Dropdown.Item>
                        <Dropdown.Item href="#/action-25" onSelect={() => displayGenre('PHP')} >PHP</Dropdown.Item>
                        <Dropdown.Item href="#/action-26" onSelect={() => displayGenre('SOA')} >SOA</Dropdown.Item>
                        <Dropdown.Item href="#/action-27" onSelect={() => displayGenre('In Action')} >In Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-28" onSelect={() => displayGenre('Git')} >Git</Dropdown.Item>
                        <Dropdown.Item href="#/action-29" onSelect={() => displayGenre('NodeJS')} >NodeJS</Dropdown.Item>
                        <Dropdown.Item href="#/action-30" onSelect={() => displayGenre('Javascript')} >Javascript</Dropdown.Item>
                        <Dropdown.Item href="#/action-31" onSelect={() => displayGenre('Ruby')} >Ruby</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Browse By Minimum Rating
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1" onSelect={() => browseRating(5)} >5 Stars</Dropdown.Item>
                        <Dropdown.Item href="#/action-2" onSelect={() => browseRating(4)} >4 Stars</Dropdown.Item>
                        <Dropdown.Item href="#/action-3" onSelect={() => browseRating(3)} >3 Stars</Dropdown.Item>
                        <Dropdown.Item href="#/action-4" onSelect={() => browseRating(2)} >2 Stars</Dropdown.Item>
                        <Dropdown.Item href="#/action-5" onSelect={() => browseRating(1)} >1 Star</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Sort By
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1" onSelect={() => sortBooks('title', 'ASC')} >Title(A-Z)</Dropdown.Item>
                        <Dropdown.Item href="#/action-2" onSelect={() => sortBooks('title', 'DESC')} >Title(Z-A)</Dropdown.Item>
                        <Dropdown.Item href="#/action-3" onSelect={() => sortBooks('author','ASC')} >Author(A-Z)</Dropdown.Item>
                        <Dropdown.Item href="#/action-4" onSelect={() => sortBooks('author','DESC')} >Author(Z-A)</Dropdown.Item>
                        <Dropdown.Item href="#/action-5" onSelect={() => sortBooks('rate','ASC')} >Rating(Descending)</Dropdown.Item>
                        <Dropdown.Item href="#/action-6" onSelect={() => sortBooks('rate','DESC')} >Rating(Ascending)</Dropdown.Item>
                        <Dropdown.Item href="#/action-7" onSelect={() => sortBooks('publishedDate','DESC')} >Release Date(Descending)</Dropdown.Item>
                        <Dropdown.Item href="#/action-8" onSelect={() => sortBooks('publishedDate','ASC')} >Release Date(Ascending)</Dropdown.Item>
                        <Dropdown.Item href="#/action-9" onSelect={() => sortBooks('price','DESC')} >Price(Descending)</Dropdown.Item>
                        <Dropdown.Item href="#/action-10" onSelect={() => sortBooks('price','ASC')} >Price(Ascending)</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Display Count
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1" onSelect={() => setLimit(10)} >10</Dropdown.Item>
                        <Dropdown.Item href="#/action-2" onSelect={() => setLimit(20)} >20</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Form>
            <Container style={gridStyle}>
                {bookList.slice(0, bookLimit).map((book) => (
                    <BookCard {...book} key={book.id} />
                ))}
            </Container>
        </>
    )
}

export default BookContainer