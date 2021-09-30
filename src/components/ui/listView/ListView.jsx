import React from 'react';
import { ListRoute } from './ListRoute';
import PropTypes from 'prop-types';

export const ListView = ({ title, icon, list, route }) => {
    return (
        <div className="bg-background br-1">
            <ListRoute title={title} icon={icon} route={route} />
            {list}
        </div>
    )
}

ListView.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    route: PropTypes.string.isRequired,
    list: PropTypes.array.isRequired,
};
