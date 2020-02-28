import React , {useState} from 'react'
import {Button, Form, Container, NavbarBrand} from 'react-bootstrap'
import {Link} from 'react-router-dom'

function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    function handleSubmit(e){
        e.preventDefault()
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({email, password})
        }
        fetch('/user/login', requestOptions).then(res => res.json()).then(console.log('success'))
    }
    return(
        <>
            <Container className="w-50">
                <NavbarBrand className="d-flex justify-content-center">
                    <Link to="/"> GeekText</Link>
                </NavbarBrand>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label> Email Address</Form.Label>
                        <Form.Control type="email" placeholder="GeekText@Gmail.Com" onChange={(e) => setEmail(e.target.value)}/>
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label> Password </Form.Label>
                        <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                    </Form.Group>
                    <Button variant="primary" type="submit" onClick={handleSubmit}>
                        Submit
                    </Button>
                </Form>
                <Container className="d-flex justify-content-center">
                    <Link to="/register">SIGN UP</Link>
                </Container>
            </Container>
        </>
    )
}

export default Login