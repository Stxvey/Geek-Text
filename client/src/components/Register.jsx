import React , {useState} from 'react'
import {Button, Form, Container, NavbarBrand, Alert} from 'react-bootstrap'
import {Link, useHistory} from 'react-router-dom'

function Register() {
    const history = useHistory()
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [errorMessage, setErrorMessage] = useState("")
    const [show, setShow] = useState(false)

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
        if(password !== confirmPassword){
            setErrorMessage("Passwords do not match")
            setShow(true)
        } else {
            fetch('/user/register', requestOptions)
            .then(res => {
                if (res.status === 200){
                    history.push('/login')
                } else {
                    setShow(true)
                    setErrorMessage('Email has already been taken')
                }
            })
        }
    }

    return(
        <>
            <Container className="w-50">
                <NavbarBrand className="d-flex justify-content-center">
                        <Link to="/"> GeekText</Link>
                </NavbarBrand>
                <Alert variant='danger' show={show} onClose={() => setShow(false)} dismissible>
                    {errorMessage}
                </Alert>
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
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label> Confirm Password </Form.Label>
                        <Form.Control type="password" placeholder="Password" onChange={(e) => setConfirmPassword(e.target.value)} />
                    </Form.Group>
                    <Button variant="primary" type="submit" onClick={handleSubmit}>
                        Submit
                    </Button>
                </Form>
                <Container className="d-flex justify-content-center">
                    Already have an account? <Link to="/login">Log In</Link>
                </Container>
            </Container>
        </>
    )
}

export default Register