import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const MenuButton = ({ title, icon }) => {
    return (
        <button className="menu__button">
            <div>
                <FontAwesomeIcon icon={icon} className="menu__button__icon" />
                <span>{title}</span>
            </div>
            <FontAwesomeIcon icon="arrow-right" className="menu__button__arrow" />
        </button>
    )
}

MenuButton.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
};
