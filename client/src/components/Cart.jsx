import React, {useEffect, useState} from 'react'
import Navbar from './Navbar'
import {useHistory} from 'react-router-dom'
import ListGroup from 'react-bootstrap'


function Cart() {

    const [cart, setCart] = useState([])
    const [user, setUser] = useState('')
    const history = useHistory();
    useEffect(() => {
        fetch('/user/findUser')
        .then(res => {
            if (res.ok) {
                return res.json()
            }
        })
        .then(resJson => {
            setUser(resJson.firstName)
        })
        setCart([...cart, history.location.state.cart])
    }, [])

    return (
        <div>
            <Navbar />
            {user}'s cart

            <ol>
                {cart.map( title => (
                    <li>{title}</li>
                ))}
            </ol>
        </div>
    )
}

export default Cart