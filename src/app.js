/**
 * @file app.js
 * @description app 入口
 */

import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch, Link} from 'react-router-dom';
import {store, StoresContext} from './store';
import routeConfig from './route';


const App = () => {
    return (
        <StoresContext.Provider value={store()}>
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
                        {routeConfig.map(({key, path, component}) => (
                            <Route
                                exact
                                key={key}
                                path={path}
                                component={component}
                            />
                        ))}
                    </Switch>
                </div>
            </Router>
        </StoresContext.Provider>
    )
}

export default App;