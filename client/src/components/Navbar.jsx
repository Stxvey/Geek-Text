import React, {useEffect, useState} from 'react'
import {Navbar, Nav} from 'react-bootstrap'
import {Link, BrowserRouter} from 'react-router-dom'

/*
    TODO:
    Get rid of login button when a user is logged on
*/
function NavBar() {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [user, setUser] = useState({})

    useEffect(() => {
        getUser()
    }, [])
    function getUser(){
        fetch('/user/findUser')
        .then(res =>{
            if(res.ok) {
                setIsLoggedIn(true)
                return res.json()
            } else {
                return {}
            }
        })
        .then(user => {
            setUser(user)
        })
    }
    function logout(){
        fetch('/user/logout')
        .then(res => res.json())
        .catch(e => console.log(e))
    }
    function LoggedInView(){

        return (
            <Navbar bg="light">
            <Navbar.Brand>
               <Link to="/">GeekText</Link>
            </Navbar.Brand>
            <Nav className="d-flex justify-content-end max-auto">
                <Nav.Item>
                    Hi 
                    <Link to={{pathname: "/profile", state: {user:user}}}>{user.firstName}!</Link>
                </Nav.Item>
                <Nav.Item>
                    <Link to="/cart"> Cart </Link>
                </Nav.Item>
                <Nav.Item>
                    <Link to="/wishlist"> Wishlist </Link>
                </Nav.Item>
                <Nav.Item>
                    <Link to="/" onClick={() => logout()}> Logout </Link>
                </Nav.Item>
            </Nav>
        </Navbar>
        )
    }
    function LoggedOutView(){
        return(
            <Navbar bg="light">
            <Navbar.Brand>
               <Link to="/">GeekText</Link>
            </Navbar.Brand>
            <Nav className="d-flex justify-content-end max-auto">
                <Nav.Item>
                    <Link to="/login"> Login </Link>
                </Nav.Item>
                <Nav.Item>
                    <Link to="/cart"> Cart </Link>
                </Nav.Item>
                <Nav.Item>
                    <Link to="/wishlist"> Wishlist </Link>
                </Nav.Item>
            </Nav>
        </Navbar>
        )
    }
    if(isLoggedIn){
        return <LoggedInView />
    } else {
        return <LoggedOutView />
    }
}

export default NavBar
