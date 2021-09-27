import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const MenuButton = ({ title, icon, arrow = true }) => {
    return (
        <button className="btn btn-menu">
            <div>
                <FontAwesomeIcon icon={icon} className="btn-menu-icon" />
                <span>{title}</span>
            </div>
            {
                (arrow) &&
                <FontAwesomeIcon icon="arrow-right" className="btn-menu-arrow" />
            }

        </button>

    )
}

MenuButton.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
};
