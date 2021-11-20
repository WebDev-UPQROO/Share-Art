import React from 'react';
import { ListRoute } from './ListRoute';
import PropTypes from 'prop-types';

export const ListView  = ({
    title, 
    icon, 
    route, 
    children, 
    ...rest
}) => {

    return (
        <div className="list-view bg-background br-1">
            <ListRoute title={title} icon={icon} route={route} {...rest}/>
            {children}
        </div>
    )
}

ListView.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    route: PropTypes.string.isRequired
};
