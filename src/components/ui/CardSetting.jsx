import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


export const CardSetting = ({ name, icon, route }) => {

    return (

        <div className="card-setting">
            <Link to={route}>
                <div className="setting-body">
                    <div className="body__text">
                        <i className={`fas fa-${icon}`}></i>
                        <p>{name}</p>
                    </div>
                </div>
            </Link>
        </div>
    )
}

CardSetting.propTypes = {
    name: PropTypes.string.isRequired,
    route: PropTypes.string.isRequired
};
