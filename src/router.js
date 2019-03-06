import React, { Component } from 'react';
import App from './app'
import Login from './pages/login'
import Button from './pages/ui/buttons'
import Modals from './pages/ui/modals';
import Loadings from './pages/ui/loadings';
import Notices from './pages/ui/notices';
import Messages from './pages/ui/messages';
import Gallery from './pages/ui/gallery';
import Tabs from './pages/ui/tabs';
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
                                <Route path="/ui/modals" component={Modals}/>
                                <Route path="/ui/loadings" component={Loadings}/>
                                <Route path="/ui/notices" component={Notices}/>
                                <Route path="/ui/messages" component={Messages}/>
                                <Route path="/ui/tabs" component={Tabs}/>
                                <Route path="/ui/gallery" component={Gallery}/>
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
