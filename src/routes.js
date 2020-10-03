import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Proproute from './proproute';
import Index from './pages/index';
import Login from './pages/login';
import Signup from './pages/signup';


let Routes = ()=> {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Index}/>
                <Route exact path="/index" component={Index}/>
                <Route path="/login" component={Login} />
                <Route path="/register" component={Signup} />

            </Switch>
        </BrowserRouter>
    )
}

export default Routes
