import React, { Component } from 'react';
import get from 'lodash.get';
import {Cell, Grid} from 'react-mdl';
import Navbar from './Navbar'


let bio;

class BookByAuthor extends Component {
    constructor(props) {
        super(props);
        this.state = { author: '', books: [] }
    }

    componentDidMount() {
        const author = this.props.location.aboutProps.book.author;

        fetch(`books/${author}`) 
            .then(results => results.json())  
            .then(books => this.setState({ books, author }));
    }

    renderBooks = () => {
        return this.state.books.map((book, idx) => {
            bio = book.biography;
            return(
                
                <div className="book-card" key={book.id}>
                    <div className="book-image-container">
                        <img src={book.thumbnail} alt="Book" className="book-image"/>
                    </div>
                    <div className="book-details">
                        <h2>Tittle: {book.title}</h2>
                        <h6>Price: ${book.price}</h6>
                    </div>
                </div>
            );
        })
    }

    render () {
        
        return (
            <div>
                <Navbar/>
            <div className="books-by-author">
                <h2>Books by: {this.state.author}</h2>
                <div className="books-container">
                    {this.renderBooks()}
                </div>

                        <Cell>
                            <h4><strong>Biography:</strong></h4>
                        </Cell>

                        <Cell>
                        <h5 style={{textAlign: 'justify', marginLeft: '10%', marginRight: '10%'}}>
                            {bio}
                        </h5>
                        
                        </Cell>
            </div>
            </div>
        )
    } 
} 
    
export default BookByAuthor;