import React from 'react'
import './App.css'
import { BrowserRouter, Route, Switch, useHistory } from 'react-router-dom'
import Signup from './Signup'
import Signin from './Signin'
import Home from './Home'


function App() {

    return (


        <BrowserRouter>
            <Switch>
                <Route path="/home">
                    <Home />
                </Route>
                <Route path="/signin">
                    <Signin />
                </Route>
                <Route exact path="/">
                    <Signup />
                </Route>



            </Switch>
        </BrowserRouter>


    );
}

export default App;
