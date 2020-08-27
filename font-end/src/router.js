import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import HomePage from './Pages/HomePage';
import ProfilePage from './Pages/ProfilePage';
import ErrorPage from './Pages/ErrorPage';

export default function Routers() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={HomePage}></Route>
                <Route path="/u" component={ProfilePage}></Route>
                <Route path="/error" component={ErrorPage}></Route>
            </Switch>
        </Router>
    )
}
