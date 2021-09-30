import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';

export const ListRoute = ({ title, icon, route, arrow = true, ...rest }) => {

    return (
        <NavLink to={route} className="btn btn-menu" activeClassName="active" {...rest}>
            <div>
                <FontAwesomeIcon icon={icon} className="btn-menu-icon" />
                <span>{title}</span>
            </div>
            {
                (arrow) &&
                <FontAwesomeIcon icon="arrow-right" className="btn-menu-arrow" />
            }

        </NavLink>

    )
}

ListRoute.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    route: PropTypes.string.isRequired,
};
