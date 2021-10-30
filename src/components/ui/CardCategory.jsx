import React from 'react'
import PropTypes from 'prop-types';

export const CardCategory = ({ image, name, route }) => {
    return (
        <div className="card-category">
            <div>
                <div className="card-category__icon">
                    <i className={`fas fa-${image ? image : 'user'}`} />
                </div>
                <p>{ name }</p>
            </div>
        </div >
    )
}

CardCategory.propTypes = {
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    route: PropTypes.string.isRequired
};
