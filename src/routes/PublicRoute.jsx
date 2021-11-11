import React from 'react'
import PropTypes from 'prop-types'
import { Route } from 'react-router'


export const PublicRoute = ({
    isAuthenticated,
    component: Component,
    ...rest
}) => {
    (isAuthenticated) &&
        localStorage.setItem('lastPath', rest.location.pathname);

    return (
        <Route
            {...rest}
            render={(props) => <Component {...props} />}
        />
    )
}

PublicRoute.propTypes = {
    component: PropTypes.func.isRequired
}
