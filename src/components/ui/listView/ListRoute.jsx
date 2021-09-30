import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';
import { ShareArtContext } from '../../../ShareArtContext';

export const ListRoute = ({ title, icon, route, arrow = true, ...rest}) => {

    const {mobileMenu: [,setMenu]} = useContext(ShareArtContext);

    const handleClick = () => {
        setMenu( menu => !menu);
    };

    return (
        <NavLink to={route} className="btn btn-menu" activeClassName="active" onClick={handleClick} {...rest}>
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
