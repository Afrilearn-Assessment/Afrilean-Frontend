import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Proproute from './proproute';
import Index from './pages/index';
import Login from './pages/login';
import Signup from './pages/signup';
import Alert from "react-s-alert";
import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/slide.css';
import 'react-s-alert/dist/s-alert-css-effects/bouncyflip.css';


let Routes = ()=> {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Index}/>
                <Route exact path="/index" component={Index}/>
                <Route path="/login" component={Login} />
                <Route path="/register" component={Signup} />

            </Switch>
            <Alert stack={{limit: 1}} />
        </BrowserRouter>
    )
}

export default Routes
