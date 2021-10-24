import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

export const ListRoute = ({ title, icon, route, arrow = true, ...rest }) => {

    return (
        <NavLink to={route} className="btn btn-menu" activeClassName="active" {...rest}>
            <div>
                <i className={"btn-menu-icon fas fa-" + icon} />
                <span>{title}</span>
            </div>
            {
                (arrow) &&
                <i className="btn-menu-arrow fas fa-arrow-right" />
            }

        </NavLink>

    )
}

ListRoute.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    route: PropTypes.string.isRequired,
};
