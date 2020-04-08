import React, { Component } from 'react'
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'
import App from './App'
import Login from './components/Login'
import Register from './components/Register'
import Profile from './components/Profile'
import Cart from './components/Cart'
import BookDetails from './components/BookDetails'

const isAuth = true

const PrivateRoute = ({component: Component, ...rest}) => {
    return(
        <Route 
            {...rest} 
            render={(props) => (
                isAuth === true
                ? <Component {...props} />
                : <Redirect to='/login' />
            )}
        />
    )
}

const AppRouter = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" component={App} exact />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/cart" component={Cart} />
            <Route path="/bookdetails" component={BookDetails} />
            <PrivateRoute path="/profile" component={Profile} />
        </Switch>
    </BrowserRouter>
)

export default AppRouter