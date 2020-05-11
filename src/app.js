/**
 * @file app.js
 * @description app 入口
 */

import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch, Link} from 'react-router-dom';
import { Provider, inject, observer } from 'mobx-react';

import Index from './views/index';
import About from './views/about';

class App extends Component {
    render() {
        return (
            <Provider {...this.props.store}>
                <Router>
                    <div>
                        <ul>
                            <li>
                                <Link to="/">index</Link>
                            </li>
                            <li>
                                <Link to="/about">about</Link>
                            </li>
                        </ul>
                        <Switch>
                            <Route exact path="/">
                                <Index />
                            </Route>
                            <Route path="/about">
                                <About />
                            </Route>
                        </Switch>
                    </div>
                </Router>
            </Provider>
        )
    }
}

export default App;