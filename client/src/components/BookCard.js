import React from 'react'

function BookCard(props) {
    
    return (
        <>
            <p>{props.name.firstName}</p>
            <p>{props.name.lastName}</p>
        </>
    )
}

export default BookCard