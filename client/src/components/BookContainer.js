import React from 'react'
import BookCard from './BookCard'

function BookContainer() {

    const book = {
        title: "Harry Potter and the Philosopher's Stone",
        author: "J.K Rowling",
        descrption: "Harry Potter learns on his 11th birthday that he is the orphaned son of two powerful wizards and possesses magical powers of his own. At Hogwarts school of Witchcraft and Wizardry, Harry embarks on the adventure of a lifetime.",
        thumbnail: ""
    }
    return(
        <>
            <BookCard name={person}/>
        </>
    )
}

export default BookContainer