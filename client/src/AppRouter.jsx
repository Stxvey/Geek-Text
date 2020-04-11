import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import App from './App'
import Login from './components/Login'
import Register from './components/Register'

const AppRouter = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" component={App} exact />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
        </Switch>
    </BrowserRouter>
)


export default AppRouter