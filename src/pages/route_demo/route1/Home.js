import React, { Component } from 'react'
import { HashRouter, Route, Link, Switch }  from 'react-router-dom'
import About from './About'
import Topics from './Topics'
import Main from './Main'
import Welcome from './Welcome'

class Home extends Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <ul>
                        <li>
                            <Link to="/">Main</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/home/topics">Topics</Link>
                        </li>
                    </ul>
                    <Welcome>呵呵哒=.=</Welcome>
                    <Welcome children="呵呵哒=.="></Welcome>
                    <Switch>
                        <Route exact path="/"  component={Main}></Route>
                        <Route path="/about" component={About}></Route>
                        <Route path="/home/topics" component={Topics}></Route>
                    </Switch>
                </div>
            </HashRouter>
        )
    }
}

export default Home