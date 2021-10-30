import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from './../../hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLoading , } = useAuth();
    console.log("user email from pRoute:",user,isLoading)
    if (isLoading) {
        return <Spinner animation="border" variant="success" />
    }
    return (
        <Route
            {...rest}
            render={({ location }) =>(user.displayName )? children : <Redirect
                to={{
                    pathname: "/login",
                    state: { from: location }
                }}
            ></Redirect>

            }
        >

        </Route>
    );
};

export default PrivateRoute;