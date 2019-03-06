import React, { Component } from 'react';
import App from './app'
import Login from './pages/login'
import Button from './pages/ui/buttons'
import Admin from './admin'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './pages/home';
import NoMatch from './pages/nomatch';

class MyRouter extends Component {
    render() {
        return (
            <BrowserRouter>
                <App>
                    <Route path="/login" component={Login}/>
                    <Route path="/" render={() => (
                        <Admin>
                            <Switch>
                                <Route path="/ui/buttons" component={Button}/>
                                <Route path="/home" component={Home}/>
                                <Route component={NoMatch}/>
                            </Switch>
                        </Admin>
                    )} />
                </App>
            </BrowserRouter>
        )
    }
}

export default MyRouter