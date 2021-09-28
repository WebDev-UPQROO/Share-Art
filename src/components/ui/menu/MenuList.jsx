import React from 'react';
import { MenuButton } from './MenuButton';
import PropTypes from 'prop-types';

export const MenuList = ({ title, icon, list, route }) => {
    return (
        <div className="bg-background br-1">
            <MenuButton title={title} icon={icon} route={route} />
            {list}
        </div>
    )
}

MenuButton.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    route: PropTypes.string.isRequired,
};
