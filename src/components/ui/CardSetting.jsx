import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types';


export const CardSetting = ({ name, route }) => {

    return (

        <div className="card-setting">
            <div className="setting-body">
                <div className="body__text">
                    <p>{{ name } === undefined ? { name } : 'Configuracion'}</p>
                </div>
            </div>
        </div>

    )
}

CardSetting.propTypes = {
    name: PropTypes.string.isRequired,
    route: PropTypes.string.isRequired
};
