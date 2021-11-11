import React from 'react'
import { Redirect, Route } from 'react-router'
import { routes } from './routes';


export const PrivateRoute = ({
    isAuthenticated,
    component: Component,
    ...rest
}) => {
    localStorage.setItem('lastPath', rest.location.pathname);

    return (
        <Route
            {...rest}
            render={(props) =>
                (isAuthenticated)
                    ? <Component {...props} />
                    : <Redirect to={routes.login} />
            }
        />
    )
}