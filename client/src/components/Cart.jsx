import React, {useEffect, useState} from 'react'
import Navbar from './Navbar'
import {Table} from 'react-bootstrap'


function Cart() {

    const [cart, setCartList] = useState([])
    
    let totalSum = 5;

    useEffect(() => {
        getCartlist()
    }, [])

    function getCartlist(){
        fetch('/cart/findCart')
        .then(res => {return res.json()})
        .then(data => setCartList(data))
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
        getCartlist()
        const updatedArray = [...cart]
        setCartList(updatedArray)
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
                                    totalSum += book.price;
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
                            <th>Total {totalSum}</th>
                            <th></th>
                        </tr>
                    </thead>
                    
            </Table>
            
  
        </> 
    )

}

export default Cart