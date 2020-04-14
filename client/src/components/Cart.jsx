import React, {useEffect, useState} from 'react'
import Navbar from './Navbar'
import {Button, Table} from 'react-bootstrap'

function Cart() {

    const [cart, setCart] = useState([])
    
    useEffect(() => {
        getCart()
    }, [])
    function getSum(){
        var sum = 0
        cart.forEach(book => {
            sum += book.price
        })
        return sum
    }
    function getCart(){
        fetch('/cart/findCart')
        .then(res => {return res.json()})
        .then(data => {
            setCart(data)
        })
    }
    
    function deleteItem(id){
        const requestOptions = {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({book_id: id})
        }
        fetch('/cart/deleteitem', requestOptions)
        .then(res => {return res.json()})
        .then(data => updateUI())
        .catch(e => {
            console.log('there was an error')
        })
    }

    function updateUI(){
        getCart()
        const updatedArray = [...cart]
        setCart(updatedArray)
    }
    function purchaseBook(){
        const bookId = cart[0].id
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({bookId: bookId})
        }
        fetch('/user/purchaseBook', requestOptions)
        .then(res => console.log(res))
        .catch(e => console.log(e))
    }

    return(
        
        <>
        
            <Navbar />
            <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Author</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Cover</th>
                        </tr>
                    </thead>
                    <tbody>
                    {cart.map(book => {
                            return(
                                <tr>
                                    <td>
                                        <div>
                                            {book.title}
                                            <br/>
                                            <i class="fas fa-trash-alt" onClick={() => deleteItem(book.id)}></i>
                                        </div>
                                    </td>
                                    <td>{book.author}</td>
                                    <td>
                                        <ion-icon name="arrow-back-circle-outline"></ion-icon>
                                        <span>{1}</span>
                                        <ion-icon name="arrow-forward-circle-outline"></ion-icon>
                                    </td>
                                    <td>{book.price}</td>

                                    <td><img src={book.thumbnail}></img></td>
                                    
                                </tr>
                            )
                        })}
                        <script src="https://unpkg.com/ionicons@5.0.0/dist/ionicons.js"></script>
                    </tbody>
                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th>Total: ${getSum()}</th>
                            <th></th>
                        </tr>
                    </thead>
                    <Button onClick={() => purchaseBook()}>Purchase</Button>
            </Table>
            
  
        </> 
    )
}

export default Cart