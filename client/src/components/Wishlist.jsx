import React, {useEffect, useState} from 'react'
import Navbar from './Navbar'
import {Dropdown, Tabs, Tab, Table} from 'react-bootstrap'

function Wishlist() {

    const [books, setBookList] = useState([])

    useEffect(() => {
        getWishlist()
    }, [])

    function getWishlist(){
        fetch('/user/wishlist')
        .then(res => {return res.json()})
        .then(data => setBookList(data))
    }
    function updateUI(){
        getWishlist()
        const updatedArray = [...books]
        setBookList(updatedArray)
    }
    function deleteItem(id){
        const requestOptions = {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({book_id: id})
        }
        fetch('/wishlist/item', requestOptions)
        .then(res => {return res.json()})
        .then(data => updateUI())
        .catch(e => {
            console.log('there was an error')
        })
    }
    function BookTable(props){
        return(
            <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Author</th>
                                <th>Cover</th>
                            </tr>
                        </thead>
                        <tbody>
                            {books.map(book => {
                                if (book.wishlistNumber !== props.wishlist){
                                    return
                                } 
                                return(
                                    <tr>
                                        <td>
                                            <div>
                                                {book.title}
                                                <br/>
                                                <WishlistDropdown tab={props.wishlist} book={book}/>
                                                <i class="fas fa-trash-alt" onClick={() => deleteItem(book.id)}></i>
                                                
                                            </div>
                                        </td>
                                        <td>{book.author}</td>
                                        <td><img src={book.thumbnail}></img></td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </Table>
        )
    }

    function moveToAnotherWishlist(book, wishlistNum){
        const bookId = book.id
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({book_id: bookId, wishlistNum: wishlistNum})
        }
        fetch('/wishlist/moveItem', requestOptions)
        .then(res => {return res.json()})
        .then(updateUI())
        .catch(e => {
            console.log('failed')
        })
    }
    function WishlistDropdown(props){
        switch(props.tab) {
            case 1:
                return(
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            Move to
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item onSelect={() => moveToAnotherWishlist(props.book, 2)}>Wishlist 2</Dropdown.Item>
                            <Dropdown.Item onSelect={() => moveToAnotherWishlist(props.book, 3)}>Wishlist 3</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                )
            case 2:
                return(
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            Move to
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item onSelect={() => moveToAnotherWishlist(props.book, 1)}>Wishlist 1</Dropdown.Item>
                            <Dropdown.Item onSelect={() => moveToAnotherWishlist(props.book, 3)}>Wishlist 3</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                )
            case 3:
                return(
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            Move to
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item onSelect={() => moveToAnotherWishlist(props.book, 1)}>Wishlist 1</Dropdown.Item>
                            <Dropdown.Item onSelect={() => moveToAnotherWishlist(props.book, 2)}>Wishlist 2</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                )
        }
    }
    
    function Rename(){
        return(
            <div>
                rename wishlist
            </div>
        )
    }
    return(
        <div>
            <Navbar />
            <Tabs defaultActiveKey="1" id="uncontrolled-tab-example">
                <Tab eventKey="1" title="Wishlist 1">
                    <BookTable wishlist={1}/>
                </Tab>
                <Tab eventKey="2" title="Wishlist 2">
                    <BookTable wishlist={2}/>
                </Tab>
                <Tab eventKey="3" title="Wishlist 3">
                    <BookTable wishlist={3}/>
                </Tab>
                <Tab eventKey="4" title="Rename Wishlists">
                    <Rename />
                </Tab>
            </Tabs>
        </div>
    )
}

export default Wishlist;