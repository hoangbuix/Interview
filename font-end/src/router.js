import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Login from './pages/Login';
import HomePage from './pages/Home'
import Error from './pages/Error';
import ProfilePage from './pages/ProfilePage';

export default function Router() {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={HomePage}></Route>
                <Route path="/login" component={Login}></Route>
                <Route path="/u" component={ProfilePage}></Route>
                <Route path="/error" component={Error}></Route>
            </Switch>
        </BrowserRouter>
    )
}