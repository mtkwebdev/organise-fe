import React, {useContext} from 'react'
import {Route, Redirect} from 'react-router-dom'
import {AuthContext} from '../utils/Auth/Auth'

const PrivateRoute =({components: RouteComponent, ...rest}) => {
    const {currentUser} = useContext(AuthContext)
    return (
        <Route 
            {...rest} 
            render={
                routeProps => !!currentUser ? 
                (<RouteComponent {...routeProps}/>) : 
                (<Redirect to={'/login'}/>)
            }
        />
    );
};

export default PrivateRoute
