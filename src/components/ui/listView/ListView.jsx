import React from 'react';
import { ListRoute } from './ListRoute';
import PropTypes from 'prop-types';

export const ListView = ({ title, icon, list, route, ...rest }) => {
    return (
        <div className="list-view bg-background br-1">
            <ListRoute title={title} icon={icon} route={route} {...rest}/>
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
