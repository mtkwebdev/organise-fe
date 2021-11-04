import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
// import Overview from '../views/Overview'
import LandingPage from '../views/LandingPage'
import Login from '../views/Login'
import Signup from '../views/Signup'
import Planner from '../views/Planner'
// import {AuthProvider} from '../utils/Auth/Auth'
// import PrivateRoute from './PrivateRoute'

function Routes() {
    return (
            <Router>
                <Switch>
                    <Route exact path="/" component={LandingPage}></Route>
                    <Route exact path="/login" component={Login}></Route>
                    <Route exact path="/signup" component={Signup}></Route>
                    <Route exact path="/planner" component={Planner}></Route>
                    {/* <PrivateRoute exact path="/overview" component={Overview}/> */}
                </Switch>
            </Router>
    )
}

export default Routes
