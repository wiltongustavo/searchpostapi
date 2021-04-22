import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Login from './pages/Login'
import HomePage from './pages/HomePage'

function Router(){
    return(

        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/homepage" component={HomePage} />
            </Switch>
        </BrowserRouter>
    )
}

export default Router;