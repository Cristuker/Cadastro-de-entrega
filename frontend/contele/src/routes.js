import {BrowserRouter, Switch, Route} from 'react-router-dom'
import React from 'react';
import Form from './pages/Form'
import Status from './pages/Status'

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Form} ></Route>
                <Route path="/status" exact component={Status}></Route>
            </Switch>
        </BrowserRouter>
    )
}