import React , {useState} from 'react'
import {Button, Form, Container, NavbarBrand} from 'react-bootstrap'
import {Link} from 'react-router-dom'

function Register() {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    // const [confirmPassword, setConfirmPassword] = useState("")

    function handleSubmit(e){
        e.preventDefault()
        const data = {
            username,
            firstName,
            lastName,
            email,
            password
        }
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        }
        fetch('/user/register', requestOptions).then(res => console.log(res))
    }
    return(
        <>
            <Container className="w-50">
                <NavbarBrand className="d-flex justify-content-center">
                        <Link to="/"> GeekText</Link>
                </NavbarBrand>
                <Form>
                    <Form.Group controlId="formBasicFirstName">
                        <Form.Label> First name</Form.Label>
                        <Form.Control type="text" placeholder="John" onChange={(e) => setFirstName(e.target.value)}/>
                    </Form.Group>
                    <Form.Group controlId="formBasicLastName">
                        <Form.Label> Last Name</Form.Label>
                        <Form.Control type="text" placeholder="Smith" onChange={(e) => setLastName(e.target.value)}/>
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label> Email Address</Form.Label>
                        <Form.Control type="email" placeholder="GeekText@Gmail.Com" onChange={(e) => setEmail(e.target.value)}/>
                    </Form.Group>
                    <Form.Group controlId="formBasicUsername">
                        <Form.Label> Username</Form.Label>
                        <Form.Control type="text" placeholder="BookNerd123" onChange={(e) => setUsername(e.target.value)}/>
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label> Password </Form.Label>
                        <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                    </Form.Group>
                    <Button variant="primary" type="submit" onClick={handleSubmit}>
                        Submit
                    </Button>
                </Form>
            </Container>
        </>
    )
}

export default Register