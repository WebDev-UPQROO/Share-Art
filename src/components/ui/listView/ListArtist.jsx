import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';

export const ListArtist = ({ image, name, route, action }) => {
    return (
        <div className="artist__item">
            <Link to={route} className="artist__item__user">
                <img src={image} alt="artist" />
                <span>{name}</span>
            </Link>

            <button className={'btn btn-animation btn-outline ' + (!action && 'selected')}>
                {(action) && <FontAwesomeIcon icon="plus" />}
                <span>{action ? 'Seguir' : 'Siguiendo'}</span>
            </button>
        </div>
    )
}

ListArtist.propTypes = {
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    route: PropTypes.string.isRequired,
    action: PropTypes.bool.isRequired,
};