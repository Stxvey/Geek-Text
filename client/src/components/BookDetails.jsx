import React, {useState} from 'react'
import Navbar from './Navbar'
import {useHistory} from 'react-router-dom'
import {Container, Image} from 'react-bootstrap'


function BookDetails() {
    const history = useHistory()
    const book = history.location.state.book

    function printDetails(){
        console.log(history.location.state)
    }

    function description(){
        if (book.longDescription === undefined){
            return "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        } else {
            return book.longDescription
        }
    }
    return(
        <>
            <Navbar />
            <Container>
                <Image src={book.thumbnailUrl} />
                <h2>{book.authors[0]}</h2>
                <p>{description()}</p>
            </Container>
        </>
    )
}

export default BookDetails