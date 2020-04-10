import React, {useEffect, useState} from 'react'
import Navbar from './Navbar'
import {Button, Col, Form, Table} from 'react-bootstrap'

function Profile(props) {
    const [addresses, setAddresses] = useState([])
    const [user, setUser] = useState({})
    const [addAddressFormActive, setAddAddressFormActive] = useState(false)
    useEffect(() => {
        getAddresses()
        setUser(props.location.state.user)
    }, [])

    function showAddAddress(){
        const newAddress = {}
        function handleAddressChange(e){
            newAddress.streetAddress = e.target.value
        }
        function handleCityChange(e){
            newAddress.city = e.target.value
        }
        function handleStateChange(e){
            newAddress.state = e.target.value
        }
        function handleZipChange(e){
            newAddress.zip = e.target.value
        }
        function handleSubmit(e){
            e.preventDefault()
            const requestOptions = {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(newAddress)
            }
            fetch('/user/addAddress', requestOptions)
            .then(res => {
                if (res.status === 200){
                    setAddAddressFormActive(false)
                    const newData = [...addresses]
                    newData.push(newAddress)
                    setAddresses(newData)
                }
            })
            .catch(e => console.log(e))
            setAddAddressFormActive(false)
        }
        if(addAddressFormActive){
            return(
                <Form>
                    <Form.Group controlId="formGridAddress1">
                        <Form.Label>Address</Form.Label>
                        <Form.Control placeholder="1234 Main St" onChange={(e) => handleAddressChange(e)}></Form.Control>
                    </Form.Group>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridCity">
                            <Form.Label>City</Form.Label>
                            <Form.Control onChange={(e) => handleCityChange(e)}/>
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridState">
                            <Form.Label>State</Form.Label>
                            <Form.Control onChange={(e) => handleStateChange(e)}/>
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridZip">
                            <Form.Label>Zip</Form.Label>
                            <Form.Control onChange={(e) => handleZipChange(e)}/>
                        </Form.Group>
                    </Form.Row>
                    <Button variant="primary" type="submit" onClick={(e) => handleSubmit(e)}>
                        Add Address
                    </Button>
                </Form>
            )
        } else {
            return
        }
    }
    function getAddresses(){
        fetch('/user/addresses')
        .then(res => {return res.json()})
        .then(data => setAddresses(data))
    }
    return (
        <div className="container">
            <Navbar />
            <h1>Profile information:</h1>
            <ul>
                <li>First name: {user.firstName}</li>
                <li>Last name: {user.lastName}</li>
                <li>Email Address: {user.email}</li>
            </ul>
            <h1>Addresses</h1>
            <i class="fas fa-plus" onClick={() => setAddAddressFormActive(true)}></i> Add Address
            <Table size="sm">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Street Address</th>
                        <th>City</th>
                        <th>State</th>
                        <th>Zip</th>
                    </tr>
                </thead>
                <tbody>
                    {addresses.map((address, index) => {
                        return(
                            <tr>
                                <td>{index}</td>
                                <td>{address.streetAddress}</td>
                                <td>{address.city}</td>
                                <td>{address.state}</td>
                                <td>{address.zip}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
            {showAddAddress()}
        </div>
    )
}

export default Profile