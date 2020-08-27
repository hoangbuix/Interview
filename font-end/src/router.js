import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Login from './pages/Login';
import HomePage from './pages/Home'
import Error from './pages/Error';

export default function Router() {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={HomePage}></Route>
                <Route path="/login" component={Login}></Route>
                <Route path="/error" component={Error}></Route>
            </Switch>
        </BrowserRouter>
    )
}