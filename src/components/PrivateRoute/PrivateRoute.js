import React from 'react';
import { Redirect, Route } from 'react-router';

const PrivateRoute = ({ children, ...rest }) => {
    const userInfo = JSON.parse(localStorage.getItem('userInfo')) || {};

    return (
        <Route
            {...rest}
            render={({ location }) =>
                userInfo.email ? (
                children
                ) : (
                <Redirect
                    to={{
                    pathname: "/login",
                    state: { from: location }
                    }}
                />
                )
            }
        />
    );
};

export default PrivateRoute;