import React, {useState} from 'react'
import {Navbar, Nav} from 'react-bootstrap'
import {Link} from 'react-router-dom'

/*
    TODO:
    Get rid of login button when a user is logged on
*/
function NavBar() {
    const [isLoggedIn, setIsLoggedIn] = useState("")

    return (
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
            </Nav>
        </Navbar>
    )
}

export default NavBar
